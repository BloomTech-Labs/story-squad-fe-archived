import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Container, Button, Checkbox, Fade, Modal, Backdrop } from '@material-ui/core';
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import { KidHeader } from '../../reusable-components';
import { useStyles } from './kid-progress-styles';
import './styles.css';
interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [open, setOpen] = React.useState(false);

    const modalClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { cohort, progress } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );
    /* if progress.reading is false the inital modal with continue to open on render */
    React.useEffect(() => {
        if (progress.reading === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [progress.reading]);
    console.log(`MATCH INFO`, matchInfo);
    return (
        // <Container className={classes.containerStyle}>
        <>
            <section className='kid__progress'>
                <KidHeader title={'Mission'} />

                <div className='main'>
                    <div className='read'>
                        <Checkbox
                            checked={progress.reading}
                            className={classes.readCheckBox}
                            color='primary'
                        />
                        <div className={classes.readIconHeight}>
                            <Link
                                to={`/story/${cohort.week}`}
                                onClick={() => request({ reading: true })}>
                                <div className={classes.readIconDiv}></div>
                            </Link>
                        </div>
                    </div>

                    <div className='write'>
                        <Checkbox
                            checked={!!child.stories.length}
                            className={classes.writeCheckBox}
                            color='primary'
                        />
                        <Link to={`/kids-dashboard/upload`}>
                            <div className={classes.writeIconDiv}></div>
                        </Link>
                    </div>
                    <div className='draw'>
                        <Checkbox
                            checked={!!child.illustrations.length}
                            className={classes.drawCheckBox}
                            color='primary'
                        />
                        <Link to={`/kids-dashboard/drawing-upload`}>
                            <div className={classes.drawIconDiv}></div>
                        </Link>
                        {progress.reading &&
                        !!child.stories.length &&
                        !!child.illustrations.length &&
                        !!matchInfo ? (
                            <Link to={`/kids-dashboard/team-join`}>
                                <Button className={classes.orangeButton} type='button'>
                                    TEAM UP!
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                disabled={
                                    !progress.reading ||
                                    !child.stories.length ||
                                    !child.illustrations.length ||
                                    !matchInfo
                                }
                                className={classes.grayButton}
                                type='button'>
                                {progress.reading &&
                                child.stories.length &&
                                child.illustrations.length
                                    ? 'Your team will be matched soon!'
                                    : 'Submissions needed to proceed!'}
                            </Button>
                        )}
                    </div>
                </div>
            </section>
            {/* Conditional modal  */}
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.modalPaper}>
                        <h2 id='transition-modal-title' className={classes.modalFont}>
                            Welcome to Story Squad!
                        </h2>
                        <p id='transition-modal-description' className={classes.modalFont}>
                            To begin your journey, click the 'READ' icon and start the story!
                            <br />
                            Are you ready to accept the mission?
                        </p>
                        <Button onClick={modalClose} className={classes.modalBtn}>
                            I accept!!
                        </Button>
                    </div>
                </Fade>
            </Modal>
            //{' '}
        </>
        // </Container>
    );
};
export { KidProgressCard };
