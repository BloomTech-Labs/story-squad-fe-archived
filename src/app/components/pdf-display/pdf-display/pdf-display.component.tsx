import './pdf-display.component.scss';
import React from 'react';
import { PDFReader } from 'react-read-pdf-b';

import { useAPI } from '../../../hooks';
import { numbersBetweenZero } from '../../../util';

import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface PDFDisplayProps {
    week: string | number;
}

const PDFDisplay: React.FC<PDFDisplayProps> = ({ week }) => {
    const [file, setFile] = React.useState<Buffer>();
    const [pages, setPages] = React.useState<number[]>();
    const { request, response } = useAPI(`/canon/${week}`);

    React.useEffect(() => {
        request();
    }, [request]);

    React.useEffect(() => {
        if (!response?.canon) return;
        setFile(Buffer.from(response.canon.base64, 'base64'));
    }, [response]);

    React.useEffect(() => {
        if (!file) return;
        const loadingTask = pdfjsLib.getDocument({ data: file });
        loadingTask.promise.then(({ numPages }) => setPages(numbersBetweenZero(numPages)));
    }, [file]);

    if (!file) return <div>Downloading...</div>;
    if (!pages) return <div>Loading...</div>;
    return (
        <div className='pdf-container'>
            {pages.map((page: number) => (
                <PDFReader key={page} data={file} page={page} scale={1.5} />
            ))}
        </div>
    );
};

export { PDFDisplay };
