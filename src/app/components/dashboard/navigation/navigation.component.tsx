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

import { ChildListContext } from '../../../state';
import { ChildLink } from '../child';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(4),
    },
    icon: {
        marginRight: theme.spacing(4),
    },
    selected: {
        '& > .MuiListItem-root': {
            borderRight: `solid black ${theme.spacing(0.4)}px`,
        },
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
    const list = React.useContext(ChildListContext);

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
                <Icon className={classes.icon}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/book.svg`}
                        alt='book'
                        width='100%'
                        height='100%'
                    />
                </Icon>
                <Typography variant='h5'>Story Squad</Typography>
            </Toolbar>
            <List>
                <NavLink to='/dashboard/home' activeClassName={classes.selected}>
                    <ListItem button className={classes.menuItem}>
                        <Icon className={classes.icon}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/dashboard.svg`}
                                alt='dashboard'
                                width='100%'
                                height='100%'
                            />
                        </Icon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </NavLink>
                <ListItem button className={classes.menuItem}>
                    <Icon className={classes.icon}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/accessability.svg`}
                            alt='accessability'
                            width='100%'
                            height='100%'
                        />
                    </Icon>
                    <ListItemText primary='Settings' />
                </ListItem>
                <NavLink to='/dashboard/cards' activeClassName={classes.selected}>
                    <ListItem button className={classes.menuItem}>
                        <Icon className={classes.icon}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/check.svg`}
                                alt='check'
                                width='100%'
                                height='100%'
                            />
                        </Icon>
                        <ListItemText primary='Payment' />
                    </ListItem>
                </NavLink>
                {list.map((child) => (
                    <ChildLink
                        key={child.id}
                        className={classes.menuItem}
                        iconClass={classes.icon}
                        selectedClass={classes.selected}
                        child={child}
                    />
                ))}
                <NavLink to='/dashboard/help' activeClassName={classes.selected}>
                    <ListItem button className={classes.menuItem}>
                        <Icon className={classes.icon}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/calendar.svg`}
                                alt='calendar'
                                width='100%'
                                height='100%'
                            />
                        </Icon>
                        <ListItemText primary='Help' />
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    );
};

export { NavigationDrawer };
