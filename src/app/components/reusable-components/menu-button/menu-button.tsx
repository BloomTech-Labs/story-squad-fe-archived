import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button,
    Grid,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { useStyles } from './menu-button-styles';

const MenuButton: React.FC = () => {
    // imported into the KidHeader component
    const classes = useStyles({});
    const history = useHistory();
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [open, setOpen] = React.useState(false);
    // need to add switch account function for menu item!

    const handleToggle = () => {
        setMenu((prevMenu) => !prevMenu);
    };
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setMenu(false);
    };
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenu(false);
        }
    }
    return (
        <Grid container item className={classes.menuGridDiv}>
            <Button
                ref={anchorRef}
                aria-controls={menu ? 'menu-list-grow' : undefined}
                aria-haspopup='true'
                className={classes.logoutMenu}
                onClick={handleToggle}>
                Menu
            </Button>
            <Popper
                open={menu}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={menu}
                                    id='menu-list-grow'
                                    onKeyDown={handleListKeyDown}
                                    className={classes.logoutMenu}>
                                    <MenuItem onClick={() => history.push('/child-home')}>
                                        Home
                                    </MenuItem>
                                    <MenuItem>Switch</MenuItem>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Grid>
    );
};

export { MenuButton };
