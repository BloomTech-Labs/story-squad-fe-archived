import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { User } from '../../../models';
import { useAPI } from '../../../hooks';
import { ParentCard, ChildList } from '../../../components';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'grid',
        gridTemplate: `
            "header header" auto
            "children children" auto`,
        gridTemplateColumns: '1fr 1fr',
        gridGap: theme.spacing(3),
    },
    header: {
        gridArea: 'header',
    },
    children: {
        gridArea: 'children',
    },
}));

interface MainPageProps {
    className?: string;
}

const HomePage: React.FC<MainPageProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ me: User }>('/parents/me');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.me) return <div></div>;
    return (
        <section className={`${className} ${classes.content}`}>
            <ParentCard className={classes.header} user={response.me} />
            <ChildList className={classes.children} />
        </section>
    );
};

export { HomePage };
