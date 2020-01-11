import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Typography, ListItem, ListItemText, Link } from '@material-ui/core';

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
    link: {
        textDecoration: 'underline',
    },
}));

const PrivacyPolicy: React.FC = () => {
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
                <List>
                    {[
                        'Frequently Used Terms',
                        'Policy Scope',
                        'What Information We Collect',
                        'How We Use Your Information',
                        'When and How We Share Information',
                        'Your Options and Control of Information',
                        'Data Retention and Security',
                        'Policy Changes',
                        'Contacting Us',
                    ].map((text, _index) => (
                        <a
                            className={classes.drawerItem}
                            href={'#' + text.toLowerCase().replace(/ /g, '-')}>
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
                    Story Squad Privacy Policy
                </Typography>

             
                <Typography variant='h4' component='h4' gutterBottom id='frequently-used-terms'>
                    Frequently Used Terms
                </Typography>

                <Typography paragraph>
                    At Story Squad, we believe it is important to use plain, clear language wherever
                    possible. The following terms and definitions are provided in order to clarify
                    the policy's language.
                </Typography>

                <Typography paragraph>
                    Story Squad - hereafter also referred to as "us" or "we."
                </Typography>

                <Typography paragraph>
                    Users - anyone who accesses or uses the Story Squad app or site. Users may
                    further be categorized into two groups, as follows:
                </Typography>

                <Typography paragraph>
                    Parental User - hereafter also referenced as "you." It is understood that the
                    primary user of an account is an adult over the age of 18, who serves as the
                    parent or legal guardian of a minor or minors who access the site.
                </Typography>

                <Typography paragraph>
                    Child(ren) - the minor or minors, under the age of 13, for whom you are creating
                    a Child Account and to whom the site's content is primarily targeted.
                </Typography>

                <Typography paragraph>
                    Parent Account - your account, through which you will control your subscription,
                    account settings, and privacy options as well as any child accounts that you
                    create.
                </Typography>

                <Typography paragraph>
                    Child Account - a subsection of your parent account. The Child Account consists
                    of any personal information about a minor that you provide, as well as the
                    platform through which a child under your care may interact with the site.
                </Typography>

                <Typography paragraph>
                    Personal Information - information that directly or indirectly identifies a
                    user, such as the user's name, email, or payment details. In addition, anonymous
                    information which is associated with a specific user (or that user's personal
                    details) is also considered personal information for the purposes of this
                    policy.
                </Typography>

                <Typography paragraph>
                    Anonymous Information - information that cannot reasonably be used to identify,
                    directly or indirectly, an individual.
                </Typography>

                <Typography paragraph>
                    Aggregate Information - information about groups or categories of users which
                    cannot be used to identify an individual user.
                </Typography>

                <Typography paragraph>
                    COPPA - COPPA stands for the Children's Online Privacy Protection Act, a federal
                    regulation passed by U.S. Congress in 1998 and enforced by the Federal Trade
                    Commission (FTC). Story Squad operates in full compliance with COPPA. For more
                    information on what the Act entails, please visit the FTC's {' '}
                    <Link
                        className={classes.link}
                        href='https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule'
                        color='inherit'>
                        website
                    </Link>
                </Typography>

                <Typography variant='h4' component='h4' gutterBottom id='policy-scope'>
                    Policy Scope
                </Typography>

                <Typography paragraph>
                    Story Squad is committed to protecting the privacy of anyone who access our site
                    and app. This Privacy Policy explains the ways in which we collect information
                    from users, what we do with that information, and how users may remove or modify
                    their information. Story Squad follows this privacy policy in compliance with
                    applicable law in the places where we operate. If necessary, Story Squad may
                    provide additional privacy notices relevant to specific situations; those
                    notices are to be read and considered in conjunction with this policy.
                </Typography>

                <Typography paragraph>
                    The information that you, the parent, provide to us via a third-party platform
                    (for example, your web browser or mobile device) may be collected separately by
                    those third-party platforms. The information that Story Squad collects is
                    covered by this privacy policy. Privacy choices that you have made with other
                    entities are not related to our privacy policy. We can not control and are not
                    responsible for the privacy practices of entities we do not own.
                </Typography>

                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='what-information-we-collect'>
                    What Information We Collect
                </Typography>

                <Typography paragraph>
                    Story Squad requires and collects from users only that information which is
                    necessary to fulfill the functions of our site and app. This information falls
                    into two categories: Information Users Provide to Us and Information We Collect
                    from Users. In addition, we may combine these two types of information to create
                    Aggregate Information, as defined in the frequently used terms above.
                </Typography>

                <Typography paragraph>
                    Information You Provide - We ask Parental Users for personal information about
                    themselves and their child(ren) in order to provide our services. This
                    information includes the parental user's first and last name, email address,
                    password, and payment information as well as the child's grade level, display
                    name, and site preferences.
                </Typography>
                <Typography paragraph>
                    Information Children Provide - Story Squad features activities which rely on
                    child generated content. These activities allow children to submit and interact
                    with content such as avatar selection, text fields, and image upload buttons,
                    through which they can submit their own creative content. The types of creative
                    content collected include fictional stories, art, and written reviews of other
                    children's content. All creative work is understood by all parties to be
                    fictional in nature and not a factual account of any real-world experience.
                </Typography>
                <Typography paragraph>
                    Creation of a child account (which includes a payment process) will be
                    considered 'high-level consent' for the above outlined activities in accordance
                    with COPPA. In the case that we become aware of information collected from a
                    child outside of that outlined in our privacy policy, we will either (a)
                    immediately delete the information or (b) immediately seek high-level consent
                    from the parental account in relation to the collected information.
                </Typography>
                <Typography paragraph>
                    Information We Collect - We may automatically collect certain information from
                    the computers or mobile devices of users, such as type of operating system, IP
                    address, web browser, information about the websites that users visit from and
                    go to after visiting Story Squad, links clicked and pages viewed within the site
                    or app, interactions with e-mail messages we send, ISP info, and other standard
                    server log information. We may use tracking technologies like tokens, software
                    development tools, and program interfaces to collect this information
                    automatically.
                </Typography>

                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='how-we-use-your-information'>
                    How We Use Your Information
                </Typography>

                <Typography paragraph>
                    Story Squad uses your information only to provide and improve on our services to
                    you, and to comply with any applicable laws. In order to do this, we may use
                    your information to (a) provide our service to you, (b) communicate with you
                    about your account details and transactions or to request feedback, (c)
                    personalize your experience, (d) use analytical tools to better understand and
                    optimize our service, (e) detect, investigate, and prevent illegal activities or
                    policy violations, and (f) to notify you of and obtain parental consent for
                    children's activities. In addition, as a child directed application, Story Squad
                    vows to limit the collection and use of children's information to that which is
                    reasonable and necessary in order for the children to participate in our
                    activities. All child created content will be screened and, should it contain
                    personally identifiable information outside of the scope of pre-existing
                    parental consent, immediately seek to receive consent for the content and/or
                    delete it from our database.
                </Typography>

                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='when-and-how-we-share-information'>
                    When and How We Share Information
                </Typography>

                <Typography paragraph>
                    The information we share with others (and which entities we share it with)
                    depends on the type of information. In most cases, information we collect is
                    only used internally. Exceptions include child created content which is uploaded
                    for publication as well as display names and avatars which exist on
                    public-facing pages. We may also share information from users, both adult and
                    child, to our service providers if the information is necessary for them to
                    perform a business, professional, or technology support function.
                </Typography>
                <Typography paragraph>
                    Story Squad will disclose personal information in response to a court order or a
                    subpoena, in compliance with U.S. law. In addition, we may disclose personal
                    information of adults or children within the scope of all applicable laws,
                    either in response to the requests of law enforcement or government agencies
                    and/or if we believe the legal disclosure of such information may prevent the
                    instigation of a crime, facilitate public safety, or protect the welfare of a
                    child using our site or application. We also reserve the right to use personal
                    information to protect the security and integrity of our site and app, and to
                    take precautions against liability.
                </Typography>
                <Typography paragraph>
                    Story Squad will not share the information we collect with third parties for the
                    purposes of advertisement or monetization outside of the program's stated
                    services.
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='your-options-and-control-of-information'>
                    Your Options and Control of Information
                </Typography>

                <Typography paragraph>
                    As a parental user, you have a variety of options for controlling, updating, and
                    deleting your information, as well as the information of your child. You may use
                    the controls found across the site and app to update your information and set
                    your preferences, and you may ask us to delete your account at any time. You may
                    also request access to a record of all the personal information we store about
                    you, and ask that we update or delete it.
                </Typography>
                <Typography paragraph>
                    Likewise, parental users may at any time refuse or revoke permission for us to
                    collect further personal information from your child, and can request that we
                    delete your child's records from our database. This includes asking us to remove
                    some or all of your child's created content. Please be aware that revoking
                    permissions or deleting information may limit or terminate the ability of you or
                    your child to participate in the service.
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    id='data-retention-and-security-story-squad'>
                    Data Retention and Security Story Squad
                </Typography>

                <Typography paragraph>
                    highly values the privacy, integrity, and security of your information. As such,
                    we have implemented multiple layers of security designed to protect your
                    information from unauthorized access, use, disclosure, and modification. While
                    we regularly review and update our approaches to security and data management,
                    It is important to be aware that no security measure is foolproof. In
                    consideration of the inherent vulnerability of online data, Story Squad will
                    only retain your information for as long as it is needed to fulfill the
                    functions outlined in this privacy policy, or in accordance with applicable law.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='policy-changes'>
                    Policy Changes
                </Typography>

                <Typography paragraph>
                    It may occasionally become necessary to update this policy in order to comply
                    with new laws or regulations, or to accommodate new technologies or business
                    practices. Should our Privacy Policy change, we will provide notice to you and,
                    if necessary, require renewed consent as applicable in accordance with the law.
                    This notification may consist of an email to the address you furnished us with,
                    or as a notification on our own platforms as best suits the circumstances or the
                    policy changes themselves.
                </Typography>
                <Typography variant='h4' component='h4' gutterBottom id='contacting-us'>
                    Contacting Us
                </Typography>

                <Typography paragraph>
                    For any questions or concerns regarding this policy, please do not hesitate to
                    contact us at storysquadHQ@gmail.com.
                </Typography>
            </main>
        </div>
    );
};

export { PrivacyPolicy };
