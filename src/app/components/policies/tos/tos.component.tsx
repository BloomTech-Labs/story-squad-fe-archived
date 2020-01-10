import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Typography, ListItem, ListItemText } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    drawerItem: {
        color: 'black',
    },
}));

const ToS: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='left'>
                <div className={classes.toolbar} />
                <List className={classes.drawerItem}>
                    {[
                        'Acceptance of Use',
                        'Term Changes',
                        'Intended Audience',
                        'Account Access and Security',
                        'Subscription Fees',
                        'Our Intellectual Property',
                        'Your Intellectual Property',
                        'General Disclaimer and Limitation',
                        'Contacting Us',
                    ].map((text, _index) => (
                        <a href={'#' + text.toLowerCase().replace(/ /g, '-')}>
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography variant='h2' component='h2' gutterBottom>
                    Story Squad Terms of Service
                </Typography>
                <br /> <br />
                <Typography variant='h4' component='h4' gutterBottom>
                    Table of Contents
                </Typography>
                <br /> <br />
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='acceptance-of-use'
                    // style={{ color: 'black' }}
                    >
                    Acceptance of Use
                </Typography>
                <Typography paragraph>
                    Story Squad is pleased to offer its services and resources to parents and their
                    children.
                </Typography>
                <Typography paragraph>
                    By registering for an account, purchasing a subscription, or using the site, you
                    confirm that you understand and accept the following terms.
                </Typography>
                <Typography paragraph>
                    If you (the adult user) do not agree with the following terms of service, you
                    and your children should not use Story Squad. We may immediately terminate your
                    access to Story Squad if you fail to comply with any provision of these terms.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='term-changes'>
                    Term Changes
                </Typography>
                <Typography paragraph>
                    The following terms may occasionally be updated at Story Squad's discretion.
                    Should Story Squad's \(\'our\'\) Terms of Service change, we (Story Squad) will
                    make every reasonable effort to notify you via email and to obtain your
                    continued consent. We suggest that you review these terms on a regular basis to
                    ensure that you still understand and accept their contents. By continuing to use
                    the site, you are agreeing to and accepting any amendments.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='intended-audience'>
                    Intended Audience
                </Typography>
                <Typography paragraph>
                    Story Squad is intended for children in 3rd through 6th grade, as well as their
                    parents or legal guardians. Anyone who is not part of one of these audiences may
                    not use Story Squad. Any account identified as belonging to or being controlled
                    by someone who is not part of our target audience will be immediately deleted,
                    and the user's access will be blocked.
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='account-access-and-security'>
                    Account Access and Security
                </Typography>
                <Typography paragraph>
                    Every Story Squad account consists of at least two users: the designated
                    Parental User - who must be a legal adult in accordance with the laws of their
                    jurisdiction - and a child or children of whom the Parental User has legal
                    guardianship. It is the responsibility of you, the Parental User, to maintain
                    the confidentiality of your password and other account information that you
                    provide by not sharing this information with others. You are expected to take
                    reasonable measures to maintain your own confidentiality and to promptly notify
                    us of any unauthorized use of your Story Squad account.
                </Typography>
                <Typography paragraph>
                    By creating an account, you agree that any information you provide is accurate
                    and up-to-date. You also agree not to impersonate or misrepresent your identity
                    or affiliation with anyone else's identity. We reserve the right to verify the
                    accuracy of information you provide.
                </Typography>
                <Typography paragraph>
                    Story Squad does not allow search-indexing or public access to the profiles or
                    creative content of its users.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='subscription-fees'>
                    Subscription Fees
                </Typography>
                <Typography paragraph>Story Squad is a paid subscription service.</Typography>
                <Typography paragraph>
                    By activating a subscription, you agree that we may automatically renew your
                    subscription under the same subscription terms on the next business day after
                    your previous subscription ends, unless you cancel your subscription before that
                    point. When a subscription renewal would normally fall on a day that does not
                    occur in the current month (for example, a subscription that would normally
                    occur on the 31st, in a month like February which has only 28 days) your
                    subscription will renew on the last day of the current month.
                </Typography>
                <Typography paragraph>
                    We retain the right to change our fee structure at any time at our sole
                    discretion, and these changes will apply to you and your account at the end of
                    your current subscription period. We will notify you by email of any changes to
                    the subscription price before renewing at said price. You may cancel your
                    subscription at any time by visiting the subscription section of your dashboard.
                </Typography>
                <Typography paragraph>
                    We may offer promotional trial subscriptions, fee waivers, or special pricing at
                    our discretion. These special subscriptions are subject to their own payment
                    terms.
                </Typography>
                <Typography paragraph>
                    As part of the process of registering a child user, you must either use a credit
                    card or other payment mechanism accepted by us to create your subscription,
                    which provides us with verified parental consent for your child's use of the
                    service.
                </Typography>
                <Typography paragraph>
                    By providing your payment information, you authorize us to charge you through a
                    third-party payment processor. By accepting these terms, you acknowledge that,
                    in the event the third-party processor experiences a data breach through no
                    fault of Story Squad, Story Squad is in no way liable or responsible to you for
                    the breach or any consequences thereof.
                </Typography>
                <Typography paragraph>
                    You are responsible for charges (including any applicable taxes) relating to any
                    subscription, service, or merchandise that you order through Story Squad. If we
                    do not receive payment from the payment mechanism you use, you agree to pay any
                    amounts due upon our demand. You are solely responsible for any disputes with
                    your financial institution or payment provider, and for any charges which your
                    provider levies against you.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='our-intellectual-property'>
                    Our Intellectual Property
                </Typography>
                <Typography paragraph>
                    All text, graphics, photographs, illustrations, works of fiction, logos,
                    animations, videos, sounds, music, artwork, computer code, likenesses, and the
                    arrangements thereof, as well as all other forms of content defined in U.S. law
                    as 'Intellectual Property' created by Story Squad (hereafter referred to as 'our
                    content') is protected by U.S. and international copyright, trademark, and IP
                    rights to the fullest extent of the law. By using the website, and subject to
                    your strict compliance with these terms and subscription fees, we offer you a
                    limited, nonexclusive, revocable, non-assignable and nontransferable license to
                    access, display, view, and use our content as necessary to participate in the
                    Story Squad service. No part of our content may be used outside of our services
                    without our express, written consent. You do not own our content, and you are
                    not authorized to modify, distribute, upload, post, publicly display, or
                    otherwise use our content in ways not covered by these terms.
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='your-intellectual-property'>
                    Your Intellectual Property
                </Typography>
                <Typography paragraph>
                    In order to participate in Story Squad, children must submit creative content
                    including fictional stories, artwork, and peer reviewing (hereafter referred to
                    as 'your content'). All content submitted by users is the intellectual property
                    of that user, in so much as it does not infringe upon our intellectual property
                    or the intellectual property of other entities. By uploading to Story Squad, you
                    affirm that your content was not created, copyrighted, or trademarked by another
                    person. Plagiarized content will immediately be removed and the account placed
                    under review.
                </Typography>
                <Typography paragraph>
                    By uploading your content to Story Squad, you grant us a limited, nonexclusive,
                    revocable, worldwide, fully paid license to use, store, copy, and display your
                    content for the purposes of facilitating the user's participation on the Story
                    Squad platform. You may revoke this permission at any time by changing your
                    settings on your dashboard or contacting us at the email below. Please be aware
                    that revocation of this license on your part may require us to terminate your
                    account.
                </Typography>
                <Typography paragraph>
                    We may monitor, screen, modify, and remove your content at any time in order to
                    conform to these terms, remove content we deem offensive, and/or protect the
                    privacy of our users.
                </Typography>
                <Typography paragraph>
                    The subject matter of all content, both ours and yours, is understood to be
                    fictional in nature. Any similarities to real world events are purely
                    coincidental.
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='general-disclaimer-and-limitation-of-liability'>
                    General Disclaimer and Limitation of Liability
                </Typography>
                <Typography paragraph>
                    Our services and content are provided on an 'as is', 'as available' basis with
                    all faults. We make no representation or warranty of any kind, express or
                    implied, about the functionality or fitness for a particular purpose of the
                    site, app, service, or content therein. Your access to and use of our site, app,
                    and service are at your sole risk.
                </Typography>
                <Typography paragraph>
                    By using the site or service you understand and agree that, to the fullest
                    extent permissible by law, Story Squad is not responsible or liable for damages
                    of any kind related to your use or inability to use the service, errors or
                    omissions on the part of either party, or a child user's performance on the
                    platform.
                </Typography>
                <Typography paragraph>
                    We have made every reasonable effort to account for common situations in the
                    terms above. However, some situations may not be covered. We reserve the right
                    to take any and all action on your account and content, at our discretion.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='contacting-us'>
                    Contacting Us
                </Typography>
                <Typography paragraph>
                    For any questions or concerns regarding these terms, please do not hesitate to
                    contact us at storysquadHQ@gmail.com.
                </Typography>
            </main>
        </div>
    );
};

export { ToS };
