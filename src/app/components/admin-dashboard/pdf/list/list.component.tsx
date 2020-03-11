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
    const [matchResponse, matchLoading, matchRequest, matchError] = useAPI<any>(`/matchmaking`);

    const { matches } = matchResponse;

    if (!canonResponse?.canon) return <h4 className={classes.loading}>Loading...</h4>;

    const { canon } = canonResponse;

    //matchmaking 3.11.20
    const baseURL = process.env.REACT_APP_ENDPOINT || 'http://localhost:4000';
    const handleMatchmake = (week: number) => (ev) => {
        ev.preventDefault();

        requestFactory()
            .get(`${baseURL}/matchmaking`)
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
                        <TableCell>Week #</TableCell>
                        <TableCell>Default PDF</TableCell>
                        <TableCell>Dyslexic PDF</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {canon.map((pdf) => (
                        <TableRow key={pdf.week}>
                            <TableCell>{pdf.week}</TableCell>
                            <TableCell>
                                <Link to={`/story/${pdf.week}`}>View</Link>
                            </TableCell>
                            <TableCell>
                                {pdf.altbase64 ? 'TO DO: link to view pdf' : 'None'}
                            </TableCell>
                            <TableCell>
                                {pdf.altbase64 ? 'TO DO: link to view pdf' : 'None'}
                            </TableCell>
                            <TableCell>
                                <button onClick={() => handleMatchmake(pdf.week)}>boop</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { PdfList };
