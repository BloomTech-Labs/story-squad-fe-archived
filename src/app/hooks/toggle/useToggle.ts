import React, { useState, useCallback } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
    const [toggleState, setToggleState] = useState(() => initialState);
    const toggler = useCallback(() => setToggleState((prevState) => !prevState), []);

    return [toggleState, toggler];
};
export default useToggle;
