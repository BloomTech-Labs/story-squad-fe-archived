import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    height: ${(props) => (props.half ? '50% ' : '100%')};
    display: flex;
    flex-flow: ${(props) => (props.column ? 'column' : 'row')}
        ${(props) => (props.nowrap ? 'nowrap' : 'wrap')};
    justify-content: center;
    align-items: center;
    position: relative;
    // background-color: var(--green);
    padding: ${(props) => (props.half ? '40px' : '0')};

    padding: 20px;
`;

export default function Card(props) {
    return <StyledCard {...props}>{props.children}</StyledCard>;
}
