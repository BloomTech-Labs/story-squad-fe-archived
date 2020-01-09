import React from 'react';

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
                {[
                    'StorySquad',
                    'Dashboard',
                    'Settings',
                    'Payment',
                    'Angel302Account',
                    'DragonM2Account',
                    'Help',
                ].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export { NavigationDrawer };
