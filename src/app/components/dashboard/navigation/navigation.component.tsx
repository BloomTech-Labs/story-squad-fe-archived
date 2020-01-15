import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Drawer,
    Icon,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useAPI } from '../../../hooks';

import { Child } from '../../../models';
import { ChildLink } from '../child';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        // background: theme.palette.background.default,
    },
    toolbar: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
    },
    icon: {
        marginRight: theme.spacing(4),
    },
    selected: {
        borderRight: 'solid black 1px',
    },
}));

interface NavigationDrawerProps {
    open?: boolean;
    onClose?: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ open, onClose }) => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const { request, response } = useAPI<{ children: Child[] }>('/children');

    React.useEffect(() => {
        request();
    }, [request]);

    return (
        <Drawer
            className={classes.drawer}
            variant={desktop ? 'permanent' : 'temporary'}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'
            onClose={onClose}
            open={open}>
            <Toolbar className={classes.toolbar}>
                <Icon className={classes.icon}>book</Icon>
                <Typography variant='h5'>Story Squad</Typography>
            </Toolbar>
            <List>
                <NavLink to='/dashboard' activeClassName={classes.selected}>
                    <ListItem button>
                        <div className={classes.menuItem}>
                            <Icon className={classes.icon}>
                                <img src='assets/dashboard.svg' width='100%' height='100%' />
                            </Icon>
                            <Typography variant='h6'>Dashboard</Typography>
                        </div>
                    </ListItem>
                </NavLink>
                <ListItem button>
                    <ListItemText primary='Settings' />
                </ListItem>
                <NavLink to='/dashboard/cards'>
                    <ListItem button>
                        <ListItemText primary='Payment' />
                    </ListItem>
                </NavLink>
                {response?.children &&
                    response.children.map((child) => <ChildLink key={child.id} child={child} />)}
                <ListItem button>
                    <ListItemText primary='Help' />
                </ListItem>
            </List>
        </Drawer>
    );
};

export { NavigationDrawer };
