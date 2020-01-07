import React from 'react';
import { Child } from '../../models';

interface ChildCardProps {
    child: Child;
}

const ChildCard: React.FC<ChildCardProps> = (props) => {
    const child = props.child;

    return (
        <div>
            <h2>{child.username}</h2>
            <button>preferences</button>
        </div>
    );
};

export { ChildCard };
