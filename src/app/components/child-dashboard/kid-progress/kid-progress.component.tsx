import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Container, Checkbox, Fade, Backdrop } from '@material-ui/core';
// import Modal from '../../reusable-components/modal/Modal';
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import Read from './icons/read.svg';
import Write from './icons/write.svg';
import Draw from './icons/draw.svg';
import { KidHeader } from '../../reusable-components';
import Button from '../../reusable-components/button/Button';
import styled from 'styled-components';
// import { useStyles } from './kid-progress-styles';

import './styles.css';
interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const StyledTestDiv = styled.div`
    --primary-color: red;
    --bg-color: blue;
    --font-size: 4em;
    --btn-padding: 10px 15px;
    width: 40%;
    button {
        border-radius: 50px;
    }
`;

const Modal = ({ children }) => {
    return (
        <div className='modal__overlay'>
            <div className='modal__card'>
                <Button className='modal__close' onClick={() => console.log('clicked')}>
                    X
                </Button>
                {children}
            </div>
        </div>
    );
};

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const [response, loading, request] = useAPI('/children/progress', 'POST');
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [open, setOpen] = useState(false);
    const [completedSubmissions, setCompletedSubmissions] = useState(false);
    const modalClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { cohort, progress } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );
    /* if progress.reading is false the inital modal with continue to open on render */
    useEffect(() => {
        if (progress.reading === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [progress.reading]);
    useEffect(() => {
        if (progress.reading && child.stories.length && child.illustrations.length) {
            setCompletedSubmissions(true);
        }
    }, [child.illustrations.length, child.stories.length, progress.reading]);
    console.log(`MATCH INFO`, matchInfo);
    return (
        // <Container className={classes.containerStyle}>
        <>
            <section className='kid__progress'>
                <KidHeader title={'Mission'} />

                <div className='main'>
                    <div className='read'>
                        <div>
                            <Link
                                to={`/story/${cohort.week}`}
                                onClick={() => request({ reading: true })}>
                                <div>
                                    <img src={Read} alt='' />
                                </div>
                            </Link>
                        </div>
                        <div className='checkbox_container'>
                            <Checkbox checked={progress.reading} color='primary' />
                        </div>
                    </div>
                    <div className='write'>
                        <Checkbox
                            checked={!!child.stories.length}
                            // className={classes.writeCheckBox}
                            color='primary'
                        />
                        <Link to={`/kids-dashboard/upload`}>
                            <div></div>
                        </Link>
                    </div>
                    <div className='draw'>
                        
                        <Checkbox
                            checked={!!child.illustrations.length}
                            // className={classes.drawCheckBox}
                            color='primary'
                        />
                        <Link to={`/kids-dashboard/drawing-upload`}>
                            <div></div>
                        </Link>
                    </div>
                    <div>
                        <Button disabled={completedSubmissions && matchInfo} type='button'>
                            {completedSubmissions
                                ? 'Team Up'
                                : !matchInfo
                                ? 'Submissions needed to proceed!'
                                : 'Your team will be matched soon!'}
                        </Button>
                    </div>
                    )}
                </div>
            </section>
            {open && (
                <Modal>
                    <h1>Welcome to Emoji town</h1>
                    <Link to={`/story/${cohort.week}`} onClick={() => request({ reading: true })}>
                        <div>
                            <img src={Read} alt='' />
                        </div>
                    </Link>
                </Modal>
            )}
            {/* Conditional modal  */}
            {/* <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                // className={classes.modal}
                open={open}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div>
                        <h2 id='transition-modal-title'>Welcome to Story Squad!</h2>
                        <p id='transition-modal-description'>
                            To begin your journey, click the 'READ' icon and start the story!
                            <br />
                            Are you ready to accept the mission?
                        </p>
                        <Button onClick={modalClose}>I accept!!</Button>
                    </div>
                </Fade>
            </Modal> */}
        </>
        // </Container>
    );
};
export { KidProgressCard };
