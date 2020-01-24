import React from 'react';

import {
    AppBar,
    Button,
    IconButton,
    Icon,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 260px)`,
            marginLeft: 260,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flex: '1',
    },
}));

interface HeadingProps {
    onMenuClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({ onMenuClick }) => {
    const classes = useStyles({});
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const logout = () => window.dispatchEvent(new Event('logout'));

    return <></>;
};

export { Heading };
