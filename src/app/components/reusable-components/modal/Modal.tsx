import React, { useEffect } from 'react';

import Slide from '@material-ui/core/Slide';
import { createPortal } from 'react-dom';
import useToggle from '../../../hooks/toggle/useToggle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});
const Portal = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    const el = document.createElement('div');
    useEffect(() => {
        modalRoot.appendChild(el);
        return () => modalRoot.removeChild(el);
    });
    return createPortal(children, el);
};

const Modal: React.FC = ({ children }) => {
    const [open, toggleOpen] = useToggle(false);

    const handleOverlayClick = () => {
        if (Boolean(open)) {
            toggleOpen();
        }
    };

    return (
        <Portal>
            {Boolean(open) && (
                <div className='modal__overlay'>
                    <div className='modal__card'>
                        <button onClick={toggleOpen} title={'x'} />
                        {children}
                    </div>
                </div>
            )}
        </Portal>
    );
};

export default Modal;
