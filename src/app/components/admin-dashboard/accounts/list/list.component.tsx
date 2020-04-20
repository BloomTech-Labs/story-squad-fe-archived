import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Button,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import { useAPI } from '../../../../hooks';
import { useStyles } from './list-component-styles';

interface Props {
    className?: string;
}

interface Admin {
    id: number;
    email: string;
    role: 'admin' | 'moderator';
    temptoken: string;
}

const AccountsList: React.FC<Props> = ({ className }) => {
    const classes = useStyles({});
    const [response] = useAPI<{ admin: Admin[] }>('/admin');
    const history = useHistory();

    if (!response?.admin) return <h4 className={classes.loading}>Loading...</h4>;

    const { admin } = response;

    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Account Management
                </Typography>

                <Link to='/admin/dashboard/account/create'>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            history.push('/admin/dashboard/add');
                        }}>
                        Add Account
                    </Button>
                </Link>
            </div>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username/Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>First-Time Registration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {admin.map((account) => (
                        <TableRow key={account.id}>
                            <TableCell>{account.email}</TableCell>
                            <TableCell>{account.role}</TableCell>
                            <TableCell>
                                {account.temptoken ? (
                                    <Link
                                        to={`/admin/register?token=${encodeURIComponent(
                                            account.temptoken
                                        )}`}>
                                        link
                                    </Link>
                                ) : (
                                    'completed'
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { AccountsList };
