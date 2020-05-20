import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    --columns: 10;
    height: 100vh;
    & > div {
        border: 3px solid #221f20;
        background-color: red;
        --width: 6;
        --initalbasis: calc(var(--width) / var(--columns) * 100%);
        flex-basis: var(--initalbasis);
    }
`;

export default function Wrapper(props) {
    return <StyledWrapper>{props.children}</StyledWrapper>;
}
