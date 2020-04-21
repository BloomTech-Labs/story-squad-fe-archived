import React from 'react';
import { Drawer, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import useStyles from './tos.styles';

const ToSDrawer: React.FC = () => {
    const classes = useStyles({});
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='left'>
                <div className={classes.toolbar} />
                <List>
                    <a className={classes.drawerItem} href='#acceptance-of-use'>
                        <ListItem button>
                            <ListItemText primary='Acceptance of Use' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#term-changes'>
                        <ListItem button>
                            <ListItemText primary='Term Changes' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#intended-audience'>
                        <ListItem button>
                            <ListItemText primary='Intended Audience' />
                        </ListItem>
                    </a>

                    <a className={classes.drawerItem} href='#account-access-and-security'>
                        <ListItem button>
                            <ListItemText primary='Account Access and Security' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#subscription-fees'>
                        <ListItem button>
                            <ListItemText primary='Subscription Fees' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#our-intellectual-property'>
                        <ListItem button>
                            <ListItemText primary='Our Intellectual Property' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#your-intellectual-property'>
                        <ListItem button>
                            <ListItemText primary='Your Intellectual Property' />
                        </ListItem>
                    </a>
                    <a
                        className={classes.drawerItem}
                        href='#general-disclaimer-and-limitation-of-liability'>
                        <ListItem button>
                            <ListItemText primary='General Disclaimer and Limitation' />
                        </ListItem>
                    </a>
                    <a className={classes.drawerItem} href='#contacting-us'>
                        <ListItem button>
                            <ListItemText primary='Contacting Us' />
                        </ListItem>
                    </a>
                </List>
            </Drawer>
        </div>
    );
};

export default ToSDrawer;
