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
} from '@material-ui/core';

import { useStyles } from './admin-navigation-styles';

const AdminNavigationDrawer = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'>
            <Toolbar className={classes.toolbar}>
                <Icon className={classes.icon}>book</Icon>
                <Typography variant='h6'>Story Squad</Typography>
            </Toolbar>
            <Divider />
            <List>
                <NavLink to='/admin/dashboard'>
                    <ListItem button>
                        <ListItemText primary='Admin Dashboard' />
                    </ListItem>
                </NavLink>
                <NavLink to='/admin/dashboard/moderator'>
                    <ListItem button>
                        <ListItemText primary='Moderator Dashboard' />
                    </ListItem>
                </NavLink>
                <NavLink to='/admin/dashboard/help'>
                    <ListItem button>
                        <ListItemText primary='Help' />
                    </ListItem>
                </NavLink>
                <NavLink to='/admin/dashboard/cohort'>
                    <ListItem button>
                        <ListItemText primary='Cohort Management' />
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    );
};

export { AdminNavigationDrawer };
