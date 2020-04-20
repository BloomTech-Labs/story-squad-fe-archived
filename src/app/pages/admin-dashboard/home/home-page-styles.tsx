import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content: {
        display: 'grid',
        gridTemplate: `
            "accounts story" auto`,
        gridTemplateColumns: '1fr 1fr',
        gridGap: theme.spacing(10),
    },
    accounts: {
        gridArea: 'accounts',
    },
    story: {
        gridArea: 'story',
    },
}));
