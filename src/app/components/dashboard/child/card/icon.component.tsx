import React from 'react';

import { Typography } from '@material-ui/core';

type CardIconProps = {
    title: string;
    status: string;
};

const CardIcon: React.FC<CardIconProps> = ({ title, status }) => (
    <div>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='subtitle1'>{status}</Typography>
    </div>
);

export { CardIcon };
