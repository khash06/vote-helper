import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { graphql } from 'gatsby';

import stateStyles from './state.module.css';

export const query = graphql`
    query($slug: String!) {
        stateDataJson(slug: {eq: $slug}) {
            absenteeApplicationLink
            checkRegistrationLink
            state
            keyDates {
                absenteeRequestDeadline
                voterRegistrationDeadline
            }
        }
    }
`

const StatePageTemplate = ({ data }) => {
    const state = data.stateDataJson;

    return (
        <Layout>
            <Head title={state.state}/>
            <Link to="/">Home</Link>
            <main className={stateStyles.mainContainer}>
                <header>    
                    <h1 className={stateStyles.title}>{state.state}</h1>
                </header>
                <section className={stateStyles.datesContainer}>
                    <h2 className={stateStyles.datesTitle}>Key Dates</h2>
                    <ul>
                        <li>Voter Registration Deadline: {state.keyDates.voterRegistrationDeadline}</li>
                        <li>Absentee/Mail-In Application Deadline: {state.keyDates.absenteeRequestDeadline}</li>
                        <li>Election Day: November 3rd, 2020</li>
                    </ul>
                </section>
                <section className={stateStyles.links}>
                    <ul>
                        <li><a href={state.checkRegistrationLink} target="_blank" rel="noopener noreferrer">Check if you are registered and/or register! <FontAwesomeIcon icon={'external-link-alt'}/></a></li>
                        <li><a href={state.absenteeApplicationLink} target="_blank" rel="noopener noreferrer">Sign up for an absentee/mail-in ballot <FontAwesomeIcon icon={'external-link-alt'}/></a></li>
                    </ul>
                    
                </section>
            </main>
        </Layout>
    )
}

export default StatePageTemplate
