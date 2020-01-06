import React from 'react';
import axios from 'axios';

import { ChildCard } from './child-card.component';


const ChildrenList: React.FC = () => {
    const [children, setChildren] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios
        .get(localhost:4000/children)
        .then(res => {
            setChildren(res.data)
        })
    }, []);

    return (
        <div>
            {children.map((child) => (
                <ChildCard key={child.id} child={child} />
            ))}
        </div>
    );
};

export { ChildrenList };
