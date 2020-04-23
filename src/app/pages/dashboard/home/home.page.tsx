import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { ParentContext, ChildListContext } from '../../../state';
import { ParentCard, ChildList } from '../../../components';
import { useStyles } from './home.page.styles';

interface MainPageProps {
    className?: string;
}

const HomePage: React.FC<MainPageProps> = ({ className }) => {
    const classes = useStyles({});

    const me = React.useContext(ParentContext);
    const list = React.useContext(ChildListContext);

    if (!me)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );
    return (
        <section className={`${className} ${classes.content}`}>
            <ChildList className={classes.children} list={list} />
        </section>
    );
};

export { HomePage };
