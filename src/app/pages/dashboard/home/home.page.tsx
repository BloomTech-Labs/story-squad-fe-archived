import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { User } from '../../../models';
import { useAPI } from '../../../hooks';
import { ParentCard, ChildList, NotificationsCard } from '../../../components';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'grid',
        gridTemplate: `
            "header header" auto
            "children notifications" auto`,
        gridTemplateColumns: '1fr 1fr',
        gridGap: theme.spacing(3),
    },
    header: {
        gridArea: 'header',
    },
    children: {
        gridArea: 'children',
    },
    notifications: {
        gridArea: 'notifications',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

interface MainPageProps {
    className?: string;
}

const HomePage: React.FC<MainPageProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response, loading } = useAPI<{ me: User }>('/parents/me');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.me)
        return (
            <div>
                <div className={classes.wrapper}>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </div>
        );
    return (
        <section className={`${className} ${classes.content}`}>
            <ParentCard className={classes.header} user={response.me} />
            <ChildList className={classes.children} />
            <NotificationsCard className={classes.notifications} />
        </section>
    );
};

export { HomePage };
