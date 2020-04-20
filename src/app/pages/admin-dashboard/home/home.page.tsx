import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAPI } from '../../../hooks';
import { PdfList, AccountsList } from '../../../components';
import { useStyles } from './home-page-styles';

interface Props {
    className?: string;
}

interface Admin {
    id: number;
    email: string;
    role: 'admin' | 'moderator';
    validpass: boolean;
}

const AdminHomePage: React.FC<Props> = ({ className }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI<{ me: Admin }>('/admin/me');

    if (!response?.me) return <div></div>;
    if (response.me.role !== 'admin') return <Redirect to='/moderator/dashboard' />;
    return (
        <section className={`${className} ${classes.content}`}>
            <AccountsList />
            <PdfList />
        </section>
    );
};

export { AdminHomePage };
