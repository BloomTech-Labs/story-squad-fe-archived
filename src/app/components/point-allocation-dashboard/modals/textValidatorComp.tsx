import React from 'react';
import { DialogTitle, Grid, Dialog, Card } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './submissionDisplay-styles';
interface ValidatorProps {
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    handleChange: (e: any) => void;
    disabledForm: any;
}

export const TextValidatorComp: React.FC<ValidatorProps> = ({
    key,
    points,
    handleChange,
    disabledForm,
}) => {
    const classes = useStyles();
    return (
        <Grid item md>
            {disabledForm ? null : (
                <TextValidator
                    validators={['minNumber:10', 'maxNumber:70', 'required']}
                    errorMessages={[
                        'Oops! Each submission must be given at least 10 points.',
                        'Oops! A submission cannot be given more than 70 points.',
                        'This is required.',
                    ]}
                    required
                    autoFocus
                    name={key}
                    value={points}
                    onChange={handleChange}
                    type='number'
                    InputProps={{
                        inputProps: {
                            min: 10,
                            max: 70,
                            // className: disabledForm ? classes.disabledInput : classes.pointInput,
                            className: classes.pointInput,
                        },
                    }}
                    variant='outlined'
                />
            )}
        </Grid>
    );
};
