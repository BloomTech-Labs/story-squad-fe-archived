// based on https://github.com/mozilla/pdf.js/tree/master/examples/create-react-app

import React, { useEffect, useRef, useContext } from 'react';

import { DocumentContext } from '../document/document.component';

const Page = (props) => {
    const canvasRef = useRef(null);

    const pdf = useContext(DocumentContext);

    useEffect(() => {
        const setCanvas = async () => {
            const page = await pdf.getPage(props.page);
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            // Prepare canvas using PDF page dimensions
            const canvas: any = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            const renderTask = page.render(renderContext);
            await renderTask.promise;
        };

        setCanvas();
    }, [pdf, props.page]);

    return (
        <canvas
            ref={canvasRef}
            //   width={window.innerWidth}
            //   height={window.innerHeight}
            {...props}
        />
    );
};

export { Page };
