import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Slide, Typography } from '@material-ui/core';
import { useStyles } from './error-page-styles';
const ErrorPage = () => {
    const history = useHistory();
    const classes = useStyles({});

    return (
        <main className={classes.root}>
            <section className={classes.content}>
                <Typography variant='h6' component='h6' gutterBottom>
                    Story Squad
                </Typography>
                <Typography variant='h3' component='h3' gutterBottom>
                    OOPS...DON'T WORRY
                </Typography>
                <Typography variant='h6' component='h6' gutterBottom>
                    The page you're looking for isn't available, but we'll help you continue your
                    mission!
                </Typography>

                <div className={classes.button}>
                    <Button variant='contained' color='primary' onClick={history.goBack}>
                        Let's go back
                    </Button>
                </div>
            </section>

            <section className={classes.image}>
                <Slide direction='left' in={true} mountOnEnter unmountOnExit>
                    <img
                        alt='Smiling Face'
                        src={`${process.env.PUBLIC_URL}/assets/smile.png`}
                        width={400}
                        height={400}
                    />
                </Slide>
            </section>
        </main>
    );
};

export { ErrorPage };
