import React from 'react';
import { MenuButton } from '../../reusable-components';
import { Typography, Grid, Button } from '@material-ui/core';
import { useStyles } from './voting-header-styles';

interface HeaderProps {
    title?: string;
    homeTeam?: string;
    awayTeam?: string;
    submissionType: string;
    setInst: any;
}
const VotingHeader: React.FC<HeaderProps> = ({ submissionType, setInst }) => {
    const classes = useStyles();
    const openHelp = () => {
        setInst(true);
    };
    return (
        <Grid container direction='row' className={classes.appBar}>
            <div className={classes.headerMenuDiv}>
                <Button className={classes.helpBtn} onClick={openHelp}>
                    ?
                </Button>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h4Styling} variant='h2'>
                        Vote for your favorite {submissionType}
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
            </div>
        </Grid>
    );
};
export { VotingHeader };
