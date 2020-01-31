import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

// import { PDFDisplay } from '../../components';

const PDFDisplay = React.lazy(() =>
    import('../../components/pdf-display/pdf-display/pdf-display.component')
);

const PdfDisplayPage: React.FC = () => {
    const { week } = useParams();

    if (!week) return <div></div>;
    return (
        <div>
            <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading PDF...</div>}>
                <PDFDisplay week={week} />
            </Suspense>
        </div>
    );
};

export { PdfDisplayPage };
