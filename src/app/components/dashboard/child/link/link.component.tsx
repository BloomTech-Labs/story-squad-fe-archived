import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, ListItem, ListItemText } from '@material-ui/core';
import { Child } from '../../../../models';

interface ChildLinkProps {
    className?: string;
    iconClass?: string;
    selectedClass?: string;
    child: Child;
}

const ChildLink: React.FC<ChildLinkProps> = ({ className, iconClass, selectedClass, child }) => {
    return (
        <NavLink to={`/dashboard/child/edit/${child.id}`} activeClassName={selectedClass}>
            <ListItem button className={className}>
                <Icon className={iconClass}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/book.svg`}
                        alt='book'
                        width='100%'
                        height='100%'
                    />
                </Icon>
                <ListItemText primary={`${child.username} Account`} />
            </ListItem>
        </NavLink>
    );
};

export { ChildLink };
