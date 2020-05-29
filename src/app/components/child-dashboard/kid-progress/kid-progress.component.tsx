import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Container, Checkbox, Fade, Backdrop, Modal } from '@material-ui/core';
// import Modal from '../../reusable-components/modal/Modal';
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import StyledWrapper from '../../reusable-components/wrapper/Wrapper';
import Read from './icons/read.svg';
import Write from './icons/write.svg';
import Draw from './icons/draw.svg';
import { KidHeader } from '../../reusable-components';
import Button from '../../reusable-components/button/Button';
import styled from 'styled-components';
import Card from '../../reusable-components/card/Card';
import { ChildContext } from '../../../state/Context';
import Done from './icons/Done.svg';
// import { useStyles } from './kid-progress-styles';
import './styles.css';
interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ onUpdate }) => {
    const child = useContext(ChildContext);
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

    //  if progress.reading is false the inital modal with continue to open on render */
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
    return (
        // <Container className={classes.containerStyle}>
        <>
            <StyledWrapper grid className='kid__progress'>
                <KidHeader title={'Mission'} />
                <CompleteCard complete={progress.reading} className='read'>
                    {!progress.reading && <Link to={`/story/${cohort.week}`} />}
                    <div>
                        <img src={progress.reading ? Done : Read} alt='Reading' />
                    </div>
                </CompleteCard>

                <WriteCard className='write' complete={child.stories.length}>
                    <img src={child.stories.length ? Done : Write} alt='Writing' />
                    {!child.stories.length && <Link to={`/kids-dashboard/upload`} />}
                </WriteCard>
                <DrawCard className='draw' complete={child.illustrations.length}>
                    <img src={child.illustrations.length ? Done : Draw} alt='Drawing' />
                    {!child.illustrations.length && <Link to={`/kids-dashboard/drawing-upload`} />}
                </DrawCard>

                <Card className='btn__container'>
                    <Link to={`/kids-dashboard/team-join`}>
                        <Button disabled={!completedSubmissions && !matchInfo} type='button'>
                            {matchInfo
                                ? 'Team Up'
                                : !completedSubmissions
                                ? 'Submissions needed to proceed!'
                                : 'Your team will be matched soon!'}
                        </Button>
                    </Link>
                </Card>
            </StyledWrapper>

            {/* Conditional modal  */}
            {open && (
                <Modal
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
                        <Card>
                            <h2 id='transition-modal-title'>Welcome to Story Squad!</h2>
                            <p id='transition-modal-description'>
                                To begin your journey, click the 'READ' icon and start the story!
                                <br />
                                Are you ready to accept the mission?
                            </p>
                            <Button onClick={modalClose}>I accept!!</Button>
                        </Card>
                    </Fade>
                </Modal>
            )}
        </>
        // </Container>
    );
};
export { KidProgressCard };

const CompleteCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.complete ? 'var(--complete)' : 'var(--blue)')};
`;
const WriteCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.complete ? 'var(--complete)' : 'var(--red)')};
`;
const DrawCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.complete ? 'var(--complete)' : 'var(--gold)')};
`;
