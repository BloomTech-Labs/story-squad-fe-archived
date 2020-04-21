import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import privacyMappedContent from './privacy.mapping';
import PrivacyDrawer from './privacy.drarwer';

const PrivacyPolicy: React.FC = () => {
    const classes = useStyles({});
    return (
        <div className={classes.root}>
            <PrivacyDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography variant='h2' component='h2' gutterBottom>
                    {privacyMappedContent[0]}
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='frequently-used-terms'>
                    {privacyMappedContent[1]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[2]}</Typography>
                <Typography paragraph>{privacyMappedContent[3]}</Typography>
                <Typography paragraph>{privacyMappedContent[4]}</Typography>
                <Typography paragraph>{privacyMappedContent[5]}</Typography>
                <Typography paragraph>{privacyMappedContent[6]}</Typography>
                <Typography paragraph>{privacyMappedContent[7]}</Typography>
                <Typography paragraph>{privacyMappedContent[8]}</Typography>
                <Typography paragraph>{privacyMappedContent[9]}</Typography>
                <Typography paragraph>{privacyMappedContent[10]}</Typography>
                <Typography paragraph>{privacyMappedContent[11]}</Typography>
                <Typography paragraph>
                    {privacyMappedContent[12]}{' '}
                    <Link
                        className={classes.link}
                        href='https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule'
                        color='inherit'>
                        {privacyMappedContent[13]}
                    </Link>
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='policy-scope'>
                    {privacyMappedContent[14]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[15]}</Typography>
                <Typography paragraph>{privacyMappedContent[16]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='what-information-we-collect'>
                    {privacyMappedContent[17]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[18]}</Typography>
                <Typography paragraph>{privacyMappedContent[19]}</Typography>
                <Typography paragraph>{privacyMappedContent[20]}</Typography>
                <Typography paragraph>{privacyMappedContent[21]}</Typography>
                <Typography paragraph>{privacyMappedContent[22]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='how-we-use-your-information'>
                    {privacyMappedContent[23]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[24]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='when-and-how-we-share-information'>
                    {privacyMappedContent[25]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[26]}</Typography>
                <Typography paragraph>{privacyMappedContent[27]}</Typography>
                <Typography paragraph>{privacyMappedContent[28]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='your-options-and-control-of-information'>
                    {privacyMappedContent[29]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[30]}</Typography>
                <Typography paragraph>{privacyMappedContent[31]}</Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='data-retention-and-security-story-squad'>
                    {privacyMappedContent[32]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[33]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='policy-changes'>
                    {privacyMappedContent[34]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[35]}</Typography>
                <Typography variant='h4' component='h4' gutterBottom id='contacting-us'>
                    {privacyMappedContent[36]}
                </Typography>
                <Typography paragraph>{privacyMappedContent[37]}</Typography>
            </main>
        </div>
    );
};

export { PrivacyPolicy };
