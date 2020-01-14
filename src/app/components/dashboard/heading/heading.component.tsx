import React from 'react';

import {
    AppBar,
    Button,
    IconButton,
    Icon,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 240px)`,
            marginLeft: 240,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flex: '1',
    },
}));

interface HeadingProps {
    onMenuClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({ onMenuClick }) => {
    const classes = useStyles({});
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const logout = () => window.dispatchEvent(new Event('logout'));

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                {!desktop && (
                    <IconButton
                        className={classes.menuButton}
                        edge='start'
                        color='inherit'
                        onClick={onMenuClick}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant='h6' noWrap>
                    Dashboard
                </Typography>
                <div className={classes.spacer} />
                <Button onClick={logout} color='inherit'>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export { Heading };
