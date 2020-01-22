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
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerItem: {
        color: 'black',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));

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
                <ListItem button>
                    <ListItemText primary='Moderator Dashboard' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Help' />
                </ListItem>
                <NavLink to='/admin/dashboard/cohort-management'>
                    <ListItem button>
                        <ListItemText primary='Cohort Management' />
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    );
};

export { AdminNavigationDrawer };
