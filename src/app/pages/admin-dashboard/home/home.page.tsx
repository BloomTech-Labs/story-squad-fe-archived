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
        gridGap: theme.spacing(10),
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
    role: 'ADMIN' | 'MODERATOR';
    validpass: boolean;
}

const AdminHomePage: React.FC<Props> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<Admin>('/admin/me');

    React.useEffect(() => {
        request();
    }, [request]);

    console.log(response);

    if (!response) return <div></div>;
    if (response.role !== 'ADMIN') return <Redirect to='/moderator/dashboard' />;
    return (
        <section className={`${className} ${classes.content}`}>
            <AccountsList />
            <PdfList />
        </section>
    );
};

export { AdminHomePage };
