import React from 'react';
import { PDFReader } from 'react-read-pdf-b';

import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../hooks';
import { numbersBetweenZero } from '../../../util';

import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const useStyles = makeStyles(() => ({
    root: {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
        '& > canvas': {
            maxWidth: '100%',
        },
    },
}));

interface PDFDisplayProps {
    week: string | number;
}

const PDFDisplay: React.FC<PDFDisplayProps> = ({ week }) => {
    const classes = useStyles();
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
        const { promise } = pdfjsLib.getDocument({ data: file });
        promise.then(({ numPages }) => setPages(numbersBetweenZero(numPages)));
    }, [file]);

    if (!file) return <div>Downloading...</div>;
    if (!pages) return <div>Loading...</div>;
    return (
        <div className={classes.root}>
            {pages.map((page: number) => (
                <PDFReader key={page} data={file} page={page} scale={1.5} />
            ))}
        </div>
    );
};

export { PDFDisplay };
