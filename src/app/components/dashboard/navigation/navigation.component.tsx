import React from 'react';
import { NavLink } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

const NavigationDrawer = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'>
            <List>
                <ListItem button>
                    <ListItemText primary='Story Squad' />
                </ListItem>
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
                <ListItem button>
                    <ListItemText primary='Help' />
                </ListItem>
            </List>
        </Drawer>
    );
};

export { NavigationDrawer };
