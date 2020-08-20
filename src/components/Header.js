import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <Link className={headerStyles.title} to="/">PLEASE VOTE...</Link>
        </header>
    )
}

export default Header