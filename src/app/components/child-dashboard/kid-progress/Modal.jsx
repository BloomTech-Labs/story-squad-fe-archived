import React from 'react';
import { Modal, Fade } from '@material-ui/core';

const ModalWithChildren = ({ children, open }) => {
    const modalClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={modalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={open}>{children}</Fade>
        </Modal>
    );
};
export default ModalWithChildren;
