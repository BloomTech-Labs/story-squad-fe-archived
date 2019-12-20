import './pdf-display.component.scss';
import React from 'react';
import { PDFReader } from 'react-read-pdf-b';

const PdfDisplay: React.FC = () => {
    const [file, setFile] = React.useState<Buffer>();
    const [pages, setPages] = React.useState<number[]>([]);

    React.useEffect(() => {
        // get pdf as base64 from backend
        // const pdf =
        //     'base64 string';
        // setFile(Buffer.from(pdf, 'base64'));
    }, []);

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
                <PDFReader data={file} page={page} scale={1.5} />
            ))}
        </div>
    );
};

export { PdfDisplay };
