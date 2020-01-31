import React from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';

import { makeStyles } from '@material-ui/core/styles';

import { PDFDisplay } from '../display/display.component';

import { useAPI } from '../../../hooks';
import { numbersBetweenZero } from '../../../util';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
}));

interface PDFPageProps {
    week: string | number;
}

const PDFPages: React.FC<PDFPageProps> = ({ week }) => {
    const classes = useStyles();

    const [file, setFile] = React.useState<Buffer>();
    const [document, setDocument] = React.useState<PDFDocumentProxy>();
    const [pages, setPages] = React.useState<number[]>();
    const { request, response } = useAPI(`/canon/${week}`);
    const { request: updateProgress } = useAPI('/children/progress', { method: 'POST' });

    const [pdfjs, setPdfjs] = React.useState<typeof import('pdfjs-dist')>();
    React.useEffect(() => {
        import('pdfjs-dist').then((m) => setPdfjs(m));
    }, []);

    React.useEffect(() => {
        request();
        updateProgress({ reading: true });
    }, [request, updateProgress]);

    React.useEffect(() => {
        if (!response) return;
        setFile(Buffer.from(response, 'base64'));
    }, [response]);

    React.useEffect(() => {
        if (!file || !pdfjs) return;
        pdfjs.getDocument({ data: file }).promise.then((doc) => {
            setDocument(doc);
        });
    }, [file, pdfjs]);

    React.useEffect(() => {
        if (!document) return;
        const { numPages } = document;
        setPages(numbersBetweenZero(numPages));
    }, [document]);

    if (!file) return <div>Downloading...</div>;
    if (!pages || !document) return <div>Loading...</div>;
    return (
        <div className={classes.root}>
            {pages.map((page: number) => (
                <PDFDisplay key={page} page={page} document={document} scale={1.5} />
            ))}
        </div>
    );
};

export { PDFPages };
