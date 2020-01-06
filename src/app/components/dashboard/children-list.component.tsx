import React from 'react';

import { ChildCard } from './child-card.component';

const ChildrenList: React.FC = () => {
    const [children, setChildren] = React.useState<any[]>([]);

    React.useEffect(() => {
        // get children from backend
    }, []);

    return (
        <div>
            {children.map((child) => (
                <ChildCard child={child} />
            ))}
        </div>
    );
};

export { ChildrenList };
