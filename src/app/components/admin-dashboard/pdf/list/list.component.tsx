import React from 'react';
import { Link } from 'react-router-dom';

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
    pdf: string;
    pdfAlt?: string;
}

const PdfList: React.FC<PdfListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ canon: Canon[] }>('/canon');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.canon) return <h4 className={classes.loading}>Loading...</h4>;

    const { canon } = response;

    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Stories
                </Typography>

                <Link to='/admin/pdf/create'>
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
                            <TableCell>{'TO DO: link to view pdf'}</TableCell>
                            <TableCell>{pdf.pdfAlt ? 'TO DO: link to view pdf' : 'None'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { PdfList };
