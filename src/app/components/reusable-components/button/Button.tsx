import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledButton = styled.button`
    background-color: ${(props) => (props.secondary ? 'white' : 'var(--bg-color, var(--red))')};
    font-size: --var(--font-size, 1em);
    font-weight: 700;
    border-radius: 10px;
    color: ${(props) => (props.secondary ? 'var(--red)' : 'var(--primary-color, white)')};
    border: 3px solid var(--primary-color, black);
    text-transform: capitalize;
    padding: var(--btn-padding, 10px 50px);
    &:hover {
        background-color: var(--primary-color, white);
        color: var(--bg-color, #eb7d5b);
    }
`;

export default function Button({ loading = false, children, ...props }) {
    const history = useHistory();
    return (
        <StyledButton
            onClick={props.click ? () => history.push(props.click) : props.onClick}
            aria-label={children}
            {...props}>
            {loading ? 'Loading' : children}
        </StyledButton>
    );
}
