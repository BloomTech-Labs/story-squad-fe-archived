import React from 'react';
import { BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const SimpleBottomNavigation: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <BottomNavigationAction label='Recents' icon={<Icon> restore </Icon>} />
            <BottomNavigationAction label='Favorites' icon={<Icon>favorite</Icon>} />
        </BottomNavigation>
    );
};

export { SimpleBottomNavigation };
