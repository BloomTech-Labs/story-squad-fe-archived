import React from 'react';
import { Document, Page } from 'react-pdf';

import { makeStyles } from '@material-ui/core/styles';

import { displayError } from '../../../state';
import { useAPI } from '../../../hooks';

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

const indexArray = (length: number) => Array.from({ length }, (_, i) => i);

const PDFDisplay: React.FC<PDFDisplayProps> = ({ week }) => {
    const classes = useStyles();
    const [file, setFile] = React.useState<Buffer>();
    const [numPages, setNumPages] = React.useState<number>();
    const [pages, setPages] = React.useState<number[]>();
    const { request, response, error } = useAPI(`/canon/${week}`);

    React.useEffect(() => {
        request();
    }, [request]);

    React.useEffect(() => {
        if (!response?.canon) return;
        if (!file) setFile(Buffer.from(response.canon.base64, 'base64'));
    }, [file, response]);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

    React.useEffect(() => {
        if (numPages) setPages(indexArray(numPages));
    }, [numPages]);

    const onLoadSuccess = (pdf: any) => {
        setNumPages(pdf.numPages);
    };

    if (!file) return <div className={classes.root}>Loading PDF...</div>;
    return (
        <Document file={{ data: file }} onLoadSuccess={onLoadSuccess} className={classes.root}>
            {pages?.map((page) => (
                <Page pageIndex={page} key={page} scale={1.5} />
            ))}
        </Document>
    );
};

export { PDFDisplay, PDFDisplay as default };
