import React from 'react';
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
            <header>    
                <h1 className={stateStyles.title}>{state.state}</h1>
            </header>
            <section>
                <h2>Key Dates</h2>
                <h3>Voter Registration Deadline: {state.keyDates.voterRegistrationDeadline}</h3>
                <h3>Absentee/Mail-In Application Deadline: {state.keyDates.absenteeRequestDeadline}</h3>
                <h3>Election Day: November 3rd, 2020</h3>
            </section>
            <section>
                <a href={state.checkRegistrationLink}>Check if you are registered and/or register!</a><br/>
                <a href={state.absenteeApplicationLink}>Sign up for an absentee/mail-in ballot</a>
            </section>
        </Layout>
    )
}

export default StatePageTemplate
