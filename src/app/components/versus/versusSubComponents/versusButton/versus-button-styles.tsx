import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btnContainer: {
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            width: '1200px',
            maxWidth: '100%',
            position: 'absolute',
            height: '37vh',
        },
        btnDiv: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            margin: '0% 2% 1% 2%',
        },
        orangeButton: {
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'width': '200px',
            'border': '3px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        avatarStyle: {
            height: '63px',
            width: '63px',
            padding: '10px',
            margin: '10%',
        },
        playerName: {
            fontFamily: 'Bangers',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '26px',
            color: '#292929',
        },
        headerMenuDiv: {
            display: 'flex',
            flexFlow: 'wrap no-wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        upperTitleDiv: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '57.5%',
        },
        upperHeaderButtonDiv: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '20%',
        },
    })
);
