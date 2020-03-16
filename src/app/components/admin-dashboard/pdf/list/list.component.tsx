import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestFactory from '../../../../util/requestFactory';

import {
    Button,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useAPI } from '../../../../hooks';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loading: {
        marginLeft: '1ch',
    },
}));

interface PdfListProps {
    className?: string;
}

interface Canon {
    week: number;
    base64: string;
    altbase64?: string;
}

const PdfList: React.FC<PdfListProps> = ({ className }) => {
    const classes = useStyles({});
    const [canonResponse] = useAPI<{ canon: Canon[] }>('/canon');

    if (!canonResponse?.canon) return <h4 className={classes.loading}>Loading...</h4>;

    const { canon } = canonResponse;

    //matchmaking 3.11.20
    const baseURL = process.env.REACT_APP_ENDPOINT || 'http://localhost:4000';
    const handleMatchmake = (week: number) => {
        console.log('sending matchmake');
        requestFactory()
            .get(`${baseURL}/matchmaking/${week}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const removeMatchmake = (week: number) => {
        console.log('sending del matchmake');
        requestFactory()
            .delete(`${baseURL}/matchmaking/${week}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Stories
                </Typography>

                <Link to='/admin/dashboard/pdf/create'>
                    <Button>Add Story</Button>
                </Link>
            </div>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Week #</TableCell>
                        <TableCell>Default PDF</TableCell>
                        <TableCell>Dyslexic PDF</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {canon.map((pdf) => (
                        <TableRow key={pdf.week}>
                            <TableCell>
                                <Button onClick={() => handleMatchmake(pdf.week)}>boop</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => removeMatchmake(pdf.week)}>bup</Button>
                            </TableCell>
                            <TableCell>{pdf.week}</TableCell>
                            <TableCell>
                                <Link to={`/story/${pdf.week}`}>View</Link>
                            </TableCell>
                            <TableCell>
                                {pdf.altbase64 ? 'TO DO: link to view pdf' : 'None'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { PdfList };
