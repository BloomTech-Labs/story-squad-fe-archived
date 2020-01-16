import React from 'react';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../hooks';
import { PdfList, AccountsList } from '../../../components';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'grid',
        gridTemplate: `
            "accounts story" auto`,
        gridTemplateColumns: '1fr 1fr',
        gridGap: theme.spacing(3),
    },
    accounts: {
        gridArea: 'accounts',
    },
    story: {
        gridArea: 'story',
    },
}));

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
    const { request, response } = useAPI<{ me: Admin }>('/admin/me');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.me) return <div></div>;
    if (response.me.role !== 'admin') return <Redirect to='/admin' />;
    return (
        <section className={`${className} ${classes.content}`}>
            <AccountsList />
            <PdfList />
        </section>
    );
};

export { AdminHomePage };
