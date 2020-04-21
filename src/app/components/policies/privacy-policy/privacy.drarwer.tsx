import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles } from './styles';

const PrivacyDrawer: React.FC = () => {
    const classes = useStyles({});
    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'>
            <div className={classes.toolbar} />
            <List>
                <a className={classes.drawerItem} href='#frequently-used-terms'>
                    <ListItem button>
                        <ListItemText primary='Frequently Used Terms' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#policy-scope'>
                    <ListItem button>
                        <ListItemText primary='Policy Scope' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#what-information-we-collect'>
                    <ListItem button>
                        <ListItemText primary='What Information We Collect' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#how-we-use-your-information'>
                    <ListItem button>
                        <ListItemText primary='How We Use Your Information' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#when-and-how-we-share-information'>
                    <ListItem button>
                        <ListItemText primary='When and How We Share Information' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#your-options-and-control-of-information'>
                    <ListItem button>
                        <ListItemText primary='Your Options and Control of Information' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#data-retention-and-security-story-squad'>
                    <ListItem button>
                        <ListItemText primary='Data Retention and Security' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#policy-changes'>
                    <ListItem button>
                        <ListItemText primary='Policy Changes' />
                    </ListItem>
                </a>
                <a className={classes.drawerItem} href='#contacting-us'>
                    <ListItem button>
                        <ListItemText primary='Contacting Us' />
                    </ListItem>
                </a>
            </List>
        </Drawer>
    );
};

export default PrivacyDrawer;
