import React from 'react';
import { PDFReader } from 'react-read-pdf';

const PdfDisplay: React.FC = () => {
    const [file, setFile] = React.useState<Buffer>();
    const [pages, setPages] = React.useState<number[]>([]);

    React.useEffect(() => {
        // get pdf as base64 from backend
        // const pdf =
        //     'base64 string';
        // setFile(Buffer.from(pdf, 'base64'));
    }, []);

    const handler = (pages: number) => {
        // create an array 2, 3, ..., pages
        const extraPagesArray: number[] = [];
        for (let i = 2; i <= pages; i++) {
            extraPagesArray.push(i);
        }
        setPages(extraPagesArray);
    };

    return (
        <div className='pdf-container'>
            {file && <PDFReader data={file} page={1} onDocumentComplete={handler} />}
            {pages.map((page: number) => (
                <PDFReader data={file} page={page} />
            ))}
        </div>
    );
};

export { PdfDisplay };
