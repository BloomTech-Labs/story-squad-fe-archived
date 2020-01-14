import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Divider,
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

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
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
                <Typography variant='h6'>Story Squad</Typography>
            </Toolbar>
            <Divider />
            <List>
                <NavLink to='/dashboard'>
                    <ListItem button>
                        <ListItemText primary='Dashboard' />
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
