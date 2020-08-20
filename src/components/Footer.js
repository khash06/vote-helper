import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.css';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    const date = new Date().getFullYear();

    return (
        <footer className={footerStyles.footerContainer}>
            Created by {data.site.siteMetadata.author}, {date}
        </footer>
    )
}

export default Footer