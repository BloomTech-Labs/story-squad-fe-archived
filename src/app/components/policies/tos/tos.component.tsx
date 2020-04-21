import React from 'react';
import { Typography } from '@material-ui/core';
import tosMappedContent from './tos.mapping';
import useStyles from './tos.styles';
import ToSDrawer from './tos.drawer';

const ToS: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <ToSDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography variant='h2' component='h2' gutterBottom>
                    {tosMappedContent[0]}
                </Typography>
                <br /> <br />
                <Typography variant='h4' component='h4' gutterBottom id='acceptance-of-use'>
                    {tosMappedContent[1]}
                </Typography>
                <Typography paragraph>{tosMappedContent[2]}</Typography>
                <Typography paragraph>{tosMappedContent[3]}</Typography>
                <Typography paragraph>{tosMappedContent[4]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='term-changes'>
                    {tosMappedContent[5]}
                </Typography>
                <Typography paragraph>{tosMappedContent[6]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='intended-audience'>
                    {tosMappedContent[7]}
                </Typography>
                <Typography paragraph>{tosMappedContent[8]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='account-access-and-security'>
                    {tosMappedContent[9]}
                </Typography>
                <Typography paragraph>{tosMappedContent[10]}</Typography>
                <Typography paragraph>{tosMappedContent[11]}</Typography>
                <Typography paragraph>{tosMappedContent[12]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='subscription-fees'>
                    {tosMappedContent[13]}
                </Typography>
                <Typography paragraph>{tosMappedContent[14]}</Typography>
                <Typography paragraph>{tosMappedContent[15]}</Typography>
                <Typography paragraph>{tosMappedContent[16]}</Typography>
                <Typography paragraph>{tosMappedContent[17]}</Typography>
                <Typography paragraph>{tosMappedContent[18]}</Typography>
                <Typography paragraph>{tosMappedContent[19]}</Typography>
                <Typography paragraph>{tosMappedContent[20]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='our-intellectual-property'>
                    {tosMappedContent[21]}
                </Typography>
                <Typography paragraph>{tosMappedContent[22]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='your-intellectual-property'>
                    {tosMappedContent[23]}
                </Typography>
                <Typography paragraph>{tosMappedContent[24]}</Typography>
                <Typography paragraph>{tosMappedContent[25]}</Typography>
                <Typography paragraph>{tosMappedContent[26]}</Typography>
                <Typography paragraph>{tosMappedContent[27]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='general-disclaimer-and-limitation-of-liability'>
                    {tosMappedContent[28]}
                </Typography>
                <Typography paragraph>{tosMappedContent[29]}</Typography>
                <Typography paragraph>{tosMappedContent[30]}</Typography>
                <Typography paragraph>{tosMappedContent[31]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='contacting-us'>
                    {tosMappedContent[32]}
                </Typography>
                <Typography paragraph>{tosMappedContent[33]}</Typography>
            </main>
        </div>
    );
};

export { ToS };
