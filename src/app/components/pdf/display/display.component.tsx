import React from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
}));

interface PDFDisplayProps {
    page: number;
    scale: number;
    document: PDFDocumentProxy;
}

const PDFDisplay: React.FC<PDFDisplayProps> = ({ document, page, scale }) => {
    const classes = useStyles();

    const canvasRef = React.createRef<HTMLCanvasElement>();

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas?.getContext) return;

        document.getPage(page).then((pdfPage) => {
            const viewport = pdfPage.getViewport({ scale });
            const canvasContext = canvas.getContext('2d');
            if (!canvasContext) return;

            console.log(viewport);

            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pdfPage.render({ canvasContext, viewport });
        });
    }, [canvasRef, document, page, scale]);

    return <canvas className={classes.root} key={page} ref={canvasRef} />;
};

export { PDFDisplay };
