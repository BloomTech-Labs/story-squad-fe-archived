import React, { useState } from 'react';
import useToggle from '../toggle/useToggle';

const useModal = (initialState = false): [boolean, (content?: string) => void, string] => {
    const [state, setState] = useToggle(initialState);
    const [modalContent, setModalContent] = useState('im a modal component');

    const handleModal = (content = '') => {
        setState();
        if (content) {
            setModalContent(content);
        }
    };

    return [state, handleModal, modalContent];
};

export default useModal;
