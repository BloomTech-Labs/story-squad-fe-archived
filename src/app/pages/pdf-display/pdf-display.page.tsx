import React from 'react';
import { useParams } from 'react-router-dom';
import { PDFDisplay } from '../../components';

const PdfDisplayPage: React.FC = () => {
    const { week } = useParams();
    if (!week) return <div></div>;
    return (
        <div>
            <PDFDisplay week={week} />
        </div>
    );
};

export { PdfDisplayPage };
