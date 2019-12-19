import React from 'react';

import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';

interface SignUpProps {
    form: string;
    checkboxes: string;
}

const SignUp: React.FC<SignUpProps> = ({ form , checkboxes }) => {
    return (
        <>
            <Typography variant='h3' gutterBottom>
                Sign Up
            </Typography>
            <Typography variant='subtitle2'>Start your child reading stories today!</Typography>
            <form className={form}>
                <TextField fullWidth label='Username' />
                <TextField fullWidth label='Password' />
                <TextField fullWidth label='Confirm Password' />
                <div className={checkboxes}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label='I accept the Terms of Service'
                    />
                    <FormControlLabel control={<Checkbox />} label='I accept the Privacy Policy' />
                </div>
                <Button variant='contained' size='large'>
                    Sign In
                </Button>
            </form>
        </>
    );
};

export { SignUp };
