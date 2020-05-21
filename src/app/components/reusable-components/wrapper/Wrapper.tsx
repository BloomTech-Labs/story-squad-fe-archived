import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-height: 100vh;
    height: 100vh;
    background-color: blue;
    display: ${(props) => (props.grid ? 'grid' : 'flex')};
    flex-flow: ${(props) => (props.column ? 'column' : 'row')} wrap;
    --columns: 10;

    & > div {
        border: 3px solid #221f20;

        --width: 10;
        --initalbasis: calc(var(--width) / var(--columns) * 100%);
        flex-basis: var(--initalbasis);
    }
    @media only screen and (min-width: 1000px) {
        div {
            --width: 5;
        }
        .col-big {
            --width: 6;
        }
    }
`;

export default function Wrapper(props) {
    return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
}
