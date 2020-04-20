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
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './heading-component-styles'; 

interface HeadingProps {
    onMenuClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({ onMenuClick }) => {
    const classes = useStyles({});
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const logout = () => window.dispatchEvent(new Event('logout'));

    if (desktop) return <></>;
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={onMenuClick}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant='h6'>Dashboard</Typography>
                <div className={classes.spacer} />
                <Button color='inherit' onClick={() => logout()}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export { Heading };
