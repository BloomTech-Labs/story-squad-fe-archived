import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
} from '@material-ui/core';
import { useStyles } from './card-component-styles';
import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';

interface ChildCardProps {
    child: Child;
    onUpdate?: () => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [response, loading, request] = useAPI(`/children/${child.id}/login`, 'POST');

    React.useEffect(() => {
        if (!response?.token) return;
        localStorage.setItem('jwt', response.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push(`/child-home`);
    }, [child.id, history, response]);

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.avatarDiv}></div>{' '}
                <div className={classes.usernameDiv}>{child.username}</div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.wrapper}>
                    {child.subscription === true ? (
                        <Button
                            className={classes.childProgBtn}
                            fullWidth
                            disabled={loading}
                            onClick={() => request()}>
                            {child.username} Login
                        </Button>
                    ) : (
                        <Link to={`/dashboard/subscribe/${child.id}`}>
                            <Button fullWidth>Subscribe</Button>
                        </Link>
                    )}

                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </CardActions>
        </Card>
    );
};

export { ChildCard };
