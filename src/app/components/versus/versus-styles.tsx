import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import key from './img/Key.png';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imagePreview: {
            marginLeft: '8%',
            width: '150px',
            height: '90px',
            borderRadius: '10px',
            cursor: 'pointer',
            filter: 'blur(2.5px)',
            border: '4px solid red',
        },
        lockKey: {
            width: '17%',
            height: '27%',
            position: 'absolute',
            top: '53.5%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            cursor: `URL(${key}) 2 26, default`,
        },
        lock: {
            width: '17%',
            height: '27%',
            position: 'absolute',
            top: '53.5%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
        },
    })
);
