import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

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
            <h1>{state.state}</h1>
            <a href={state.absenteeApplicationLink}>Sign up for an absentee ballot</a>
    <h2>{state.checkRegistrationLink}</h2>
    <h2>{state.keyDates.absenteeRequestDeadline}</h2>
    <h2>{state.keyDates.voterRegistrationDeadline}</h2>
        </Layout>
    )
}

export default StatePageTemplate
