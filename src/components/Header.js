import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.title}><Link to="/">Please Vote...</Link></div>
        </header>
    )
}

export default Header