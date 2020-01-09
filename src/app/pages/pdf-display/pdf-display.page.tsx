import React from 'react';

import { PdfDisplay } from '../../components';

const PdfDisplayPage: React.FC = (props) => {
    return (
        <div>
            <PdfDisplay {...props} />
        </div>
    );
};

export { PdfDisplayPage };
