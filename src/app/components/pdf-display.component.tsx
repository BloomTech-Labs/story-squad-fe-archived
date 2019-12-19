import React from 'react';
import { PDFReader } from 'react-read-pdf';

const PdfDisplay: React.FC = () => {
    const [file, setFile] = React.useState('');

    React.useEffect(() => {
        // get pdf as base64 from backend
    }, []);

    return <div>{file && <PDFReader data={Buffer.from(file, 'base64')} />}</div>;
};

export { PdfDisplay };
