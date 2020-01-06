import React from 'react';

const ChildCard: any = (props) => {
    const [child] = props.child;

    // add link to preferences

    return (
        <div>
            <h2>{child.username}</h2>
            <button>preferences</button>
        </div>
    );
};

export { ChildCard };
