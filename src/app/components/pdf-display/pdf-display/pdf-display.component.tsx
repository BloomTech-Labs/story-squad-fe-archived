import './pdf-display.component.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PDFReader } from 'react-read-pdf-b';
import requestFactory from '../../../util/requestFactory';

const PdfDisplay: React.FC = (props) => {
    const [file, setFile] = React.useState<Buffer>();
    const [pages, setPages] = React.useState<number[]>([]);

    const axios = requestFactory();

    const { week } = useParams();

    React.useEffect(() => {
        // get pdf as base64 from backend
        if (!file) {
            axios
                .get(`/canon/${week}`)
                .then((res) => {
                    // console.log(res.data);
                    if (res && res.data) {
                        setFile(Buffer.from(res.data.base64, 'base64'));
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [axios, file, week]);

    const multiPageHandler = (pages: number) => {
        // create an array 2, 3, ..., pages
        const extraPagesArray: number[] = [];
        for (let i = 2; i <= pages; i++) {
            extraPagesArray.push(i);
        }
        setPages(extraPagesArray);
    };

    return (
        <div className='pdf-container'>
            {file && <PDFReader data={file} scale={1.5} onDocumentComplete={multiPageHandler} />}
            {pages.map((page: number) => (
                <PDFReader data={file} page={page} key={page} scale={1.5} />
            ))}
        </div>
    );
};

export { PdfDisplay };
