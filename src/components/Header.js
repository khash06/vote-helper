import React from 'react';

import headerStyles from './header.module.css';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.title}>Please Vote...</div>
        </header>
    )
}

export default Header