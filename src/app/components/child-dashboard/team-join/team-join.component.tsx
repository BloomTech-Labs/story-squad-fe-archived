import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Button,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';

import { useAPI } from '../../../hooks';
import { useStyles } from './styles';
import { Child } from '../../../models';
import avatar1 from '../../point-allocation-dashboard/img/cam.png';
import avatar2 from '../../point-allocation-dashboard/img/Hero13.png';

interface TeamJoinProps {
    onUpdate?: () => void;
    child: Child;
}

const TeamJoin: React.FC<TeamJoinProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [student, setStudent] = useState();
    const [teammate, setTeammate] = useState();

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

    const prevMenu = React.useRef(menu);
    React.useEffect(() => {
        if (prevMenu.current === true && menu === false && anchorRef.current !== null) {
            anchorRef.current.focus();
        }

        prevMenu.current = menu;
    }, [menu]);

    useEffect(() => {
        if (matchInfo) {
            setStudent({ ...matchInfo.thisMatch.team.student });
            setTeammate({ ...matchInfo.thisMatch.team.teammate });
        }
    }, [matchInfo]);
    return (
        <>
            <Card className={classes.card}>
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
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                {/* title bar */}
                <section className={classes.columnFlex}>
                    <div className={classes.appBar}>
                        <div className={classes.headerFont}>Join the Squad!</div>
                        <div className={classes.btn}>
                            {' '}
                            <Button
                                ref={anchorRef}
                                aria-controls={menu ? 'menu-list-grow' : undefined}
                                aria-haspopup='true'
                                className={classes.logoutButton}
                                onClick={handleToggle}>
                                Menu
                            </Button>
                        </div>
                    </div>

                    <div className={classes.grid}>
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.draw}>
                                <div className={classes.avatarDiv}>
                                    <p className={classes.username}>
                                        Hi! My name is {child.username}! 
                                        {student === undefined ? 'Student' : student.username}!
                                    </p>
                                    <img
                                        src={avatar1}
                                        className={classes.avatar1}
                                        alt='child avatar'></img>
                                </div>
                            </div>
                        </div>
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.teammate}>
                                <div className={classes.avatarDiv}>
                                    <p className={classes.username}>
                                        Hi! my name is{' '}
                                        {teammate === undefined ? 'Teammate' : teammate.username}!
                                    </p>

                                    <img
                                        src={avatar2}
                                        className={classes.avatar2}
                                        alt='child avatar'></img>
                                </div>
                                <Link to={`/kids-dashboard/points-dashboard`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        Next
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Card>
        </>
    );
};
export { TeamJoin };
