import React from 'react';
import { MenuButton } from '../menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './kid-header-styles';
import storysquad from './storysquad.svg';
import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.svg';
import './styles.css';

interface HeaderProps {
    title?: string;
}
const KidHeader: React.FC<HeaderProps> = ({ title = 'Story Squad' }) => {
    return (
        <header className='header'>
            {title ? (
                <h2 className='title__header__text'>{title}</h2>
            ) : (
                <img className='title__header__text' src={storysquad} alt='' />
            )}
            <div className='header__image'>
                <img src={cityscape} alt='' />
            </div>
        </header>
    );
};
export { KidHeader };
