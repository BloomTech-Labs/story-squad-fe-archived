import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
    loading: {
        marginLeft: '1ch',
    },
}));

interface PdfListProps {
    className?: string;
}

interface Cohort {
    id: number;
    week: string;
    activity?: string;
}

const CohortManagementPage: React.FC<PdfListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ cohort: Cohort[] }>('/cohort');

    React.useEffect(() => {
        request();
    }, [request]);

    // if (response?.cohort) return <h4 className={classes.loading}>Loading...</h4>;

    // const { week } = response;

    return (
        <div>
            <Typography variant='h4' gutterBottom>
                Cohort Management
            </Typography>

            <Link to='/admin/dashboard/create-cohort'>
                <Button>Create Cohort</Button>
            </Link>

            {/* <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Cohort #</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cohort.map((cohort) => (
                        <TableRow key={cohort.week}>
                            <TableCell>{cohort.week}</TableCell>
                            <TableCell>
                                <Link to={`/story/${cohort.week}`}>View</Link>
                            </TableCell>
                            <TableCell>
                                {cohort.week ? 'TO DO: link to view pdf' : 'None'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> */}
        </div>
    );
};

export { CohortManagementPage };
