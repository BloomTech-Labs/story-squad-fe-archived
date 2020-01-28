import React from 'react';
import { useParams } from 'react-router-dom';

import { PDFPages } from '../../components';

const PdfDisplayPage: React.FC = () => {
    const { week } = useParams();

    if (!week) return <div></div>;
    return (
        <div>
            <PDFPages week={week} />
        </div>
    );
};

export { PdfDisplayPage };
