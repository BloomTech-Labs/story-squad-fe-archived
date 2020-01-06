import React from 'react';

const ChildrenList: React.FC = () => {

    const [children, setChildren] = React.useState<any[]>([])

    React.useEffect( () => {
        // get children from backend
    }, [])

    return (
        <div>
            {/* {children.map((child) => <ChildCard/>)} */}
        </div>
    );
};

export { ChildrenList };
