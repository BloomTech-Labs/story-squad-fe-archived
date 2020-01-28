import React from 'react';
import { PDFReader } from 'react-read-pdf-b';

import { makeStyles } from '@material-ui/core/styles';

import { displayError } from '../../../state';
import { useAPI } from '../../../hooks';
import { numbersBetweenZero } from '../../../util';

const useStyles = makeStyles((theme) => ({
    root: {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
        '& > canvas': {
            maxWidth: '100%',
        },
    },
}));

interface PDFDisplayProps {
    week: string | number;
}

const PDFDisplay: React.FC<PDFDisplayProps> = ({ week }) => {
    const classes = useStyles();

    const [file, setFile] = React.useState<Buffer>();
    const [pages, setPages] = React.useState<number[]>();
    const { request, response, error } = useAPI(`/canon/${week}`);

    const [pdfjs, setPdfjs] = React.useState<typeof import('pdfjs-dist')>();
    React.useEffect(() => {
        import('pdfjs-dist').then((m) => setPdfjs(m));
    }, []);

    React.useEffect(() => {
        request();
    }, [request]);

    React.useEffect(() => {
        if (!response?.canon) return;
        setFile(Buffer.from(response.canon.base64, 'base64'));
    }, [response]);

    React.useEffect(() => {
        if (!file || !pdfjs) return;
        const { promise } = pdfjs.getDocument({ data: file });
        promise.then(({ numPages }) => setPages(numbersBetweenZero(numPages)));
    }, [file, pdfjs]);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

    if (!file) return <div>Downloading...</div>;
    if (!pages) return <div>Loading...</div>;
    return (
        <div className={classes.root}>
            {pages.map((page: number) => (
                <PDFReader key={page} data={file} page={page} scale={1.5} />
            ))}
        </div>
    );
};

export { PDFDisplay };
