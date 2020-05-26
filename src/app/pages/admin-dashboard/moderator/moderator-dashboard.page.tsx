import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Typography, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { ListCohorts } from '../../../components/admin-dashboard/cohort/list/list.component';
import { useAPI } from '../../../hooks/index';
import { Cohort } from '../../../models/index';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface CohortListItemProps {
    cohort: Cohort;
    onUpdate?: () => void;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const ModeratorDashboardPage: React.FC<CohortListItemProps> = ({ cohort, onUpdate }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography variant='h4' gutterBottom>
                Moderator Dashboard
            </Typography>
            <ListCohorts />
        </div>
    );
};

export { ModeratorDashboardPage };
