import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAPI } from '../../../hooks';
import { useStyles } from './pdf-display-styles';

const Document = lazy(() =>
    import('react-pdf').then(({ Document }) => ({ default: Document, Page }))
);
const Page = lazy(() => import('react-pdf').then(({ Page }) => ({ default: Page })));

interface PDFDisplayProps {
    week: string | number;
}

const indexArray = (length: number) => Array.from({ length }, (_, i) => i);

const PDFDisplay: React.FC<PDFDisplayProps> = ({ week }) => {
    const classes = useStyles({});
    const [file, setFile] = React.useState<Buffer>();
    const [numPages, setNumPages] = React.useState<number>();
    const [pages, setPages] = React.useState<number[]>();
    const [response] = useAPI(`/canon/${week}`);

    React.useEffect(() => {
        if (!response?.canon) return;
        if (!file) setFile(Buffer.from(response.canon.base64, 'base64'));
    }, [file, response]);

    React.useEffect(() => {
        if (numPages) setPages(indexArray(numPages));
    }, [numPages]);

    const onLoadSuccess = (pdf: any) => {
        setNumPages(pdf.numPages);
    };
    const fallback = <div className={classes.root}>Loading PDF...</div>;
    if (!file) return fallback;
    return (
        <Suspense fallback={fallback}>
            <Document file={{ data: file }} onLoadSuccess={onLoadSuccess} className={classes.root}>
                {pages?.map((page) => (
                    <Page pageIndex={page} key={page} scale={1.5} className={classes.page} />
                ))}
            </Document>
            <div className={classes.btn}>
                <Link to={`/kids-dashboard`}>
                    <Button className={classes.orangeButton} style={{ alignContent: 'center' }}>
                        Back
                    </Button>
                </Link>
            </div>
        </Suspense>
    );
};

export { PDFDisplay };
