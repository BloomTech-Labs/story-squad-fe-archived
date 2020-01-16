import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { ParentContext, ChildListContext } from '../../../state';
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
    const me = React.useContext(ParentContext);
    const list = React.useContext(ChildListContext);

    if (!me) return <div></div>;
    return (
        <section className={`${className} ${classes.content}`}>
            <ParentCard className={classes.header} user={me} />
            <ChildList className={classes.children} list={list} />
        </section>
    );
};

export { HomePage };
