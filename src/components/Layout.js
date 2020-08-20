import React from 'react';
import Header from './Header';
import Footer from './Footer';

import layoutStyles from './layout.module.css';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <main>
                { props.children }
                </main>
            </div>
        </div>
    )
}

export default Layout