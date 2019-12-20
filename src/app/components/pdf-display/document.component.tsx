// based on https://github.com/mozilla/pdf.js/tree/master/examples/create-react-app

import React, { useEffect, useState } from 'react';

import pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const DocumentContext = React.createContext({} as any);

interface doc {
    url?: string;
    data?: Buffer;
}

const fetchPdf = async (doc: doc, cb) => {
    const loadingTask = pdfjs.getDocument(doc);
    const pdf = await loadingTask.promise;
    cb(pdf);
    return pdf;
};

const Document = (props) => {
    const { document, onDocumentLoaded } = props;

    const [pdf, setPdf] = useState();

    useEffect(() => {
        setPdf(fetchPdf(document, onDocumentLoaded));
    }, [document, onDocumentLoaded]);

    return (
        <DocumentContext.Provider value={pdf}>
            <div {...props}>{props.children}</div>
        </DocumentContext.Provider>
    );
};

export { Document, DocumentContext };
