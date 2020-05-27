import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';
import { Voting } from '../../components';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    headerBorder: {
        border: '4px solid #292929',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    welcome: {
        marginBottom: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

const VotingPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Switch>
                    <Route
                        path='/voting' // TODO - create a new path for the child-home component
                        component={Voting}
                    />
                </Switch>
            </main>
        </div>
    );
};
export { VotingPage };
