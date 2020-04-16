import React, { useState, useEffect } from 'react';
import 'typeface-nunito';

import {
    Button,
    Avatar,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
// import { useStyles } from './voting-styles';
import { Child, Cohort } from '../../models';

interface VotingCardProps {
    child: Child;
}

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    return <h1>Hello World</h1>;
};

export { Voting };
