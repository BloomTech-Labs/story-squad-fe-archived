import React from 'react';

import { PdfDisplay } from '../components/pdf-display/index';

const PdfDisplayPage: React.FC = (props) => {
    return (
        <div>
            <PdfDisplay {...props} />
        </div>
    );
};

export { PdfDisplayPage };
