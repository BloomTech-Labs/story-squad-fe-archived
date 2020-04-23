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
import { useStyles } from '../../../admin-dashboard/accounts/list/list-component-styles';
import { useAPI } from '../../../../hooks';

// const useStyles = makeStyles(() => ({
//     header: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     loading: {
//         marginLeft: '1ch',
//     },
// }));

interface Props {
    className?: string;
}

const CCSList: React.FC<Props> = ({ className }) => {
    const classes = useStyles({});
    const [response] = useAPI('/submissions');

    if (!response?.submissions) return <h4 className={classes.loading}>Loading...</h4>;

    const { submissions } = response;
    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Submissions
                </Typography>
            </div>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Week #</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((ccs) => (
                        <TableRow key={ccs.week}>
                            <TableCell>{ccs.week}</TableCell>
                            <TableCell>
                                <Link to={`/kids-dashboard/submit/${ccs.week}`}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { CCSList };
