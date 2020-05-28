import React from 'react';
import { MenuButton } from '../menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './kid-header-styles';
import storysquad from './storysquad.svg';
import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.svg';
import './styles.css';

interface HeaderProps {
    title?: string;
    subtext?: string;
}
const KidHeader: React.FC<HeaderProps> = ({ title = 'Story Squad', subtext = '' }) => {
    return (
        <header className='header'>
            <h2 className='title__header__text'>{title}</h2>
            <MenuButton />
            <h3 className='header__subtext'>{subtext}</h3>
        </header>
    );
};
export { KidHeader };
