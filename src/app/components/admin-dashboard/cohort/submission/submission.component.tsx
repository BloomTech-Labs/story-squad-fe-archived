import React from 'react';

interface SubPageProps {
    url: string;
    params: number | string;
}

const Submissions: React.FC<SubPageProps> = ({ url, params }) => {
    console.log(url, params);

    return <div>Hello it's me</div>;
};

export { Submissions };
