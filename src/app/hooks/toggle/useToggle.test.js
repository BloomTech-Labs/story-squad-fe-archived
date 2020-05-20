import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import useToggle from './useToggle';

const Test = ({ defaultOn }) => {
    const [on, toggle] = useToggle(defaultOn);

    return <button onClick={toggle}>{on ? 'on' : 'off'}</button>;
};

test('should return false be defai;t', () => {
    const { container } = render(<Test />);
    expect(container.firstChild.textContent.toBe('off'));
});

test('should return specified inital state', () => {
    const { container } = render(<Test defaultOn />);
    expect(container.firstChild.textContent).toBe('on');
});
