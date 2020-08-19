const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {

    const result = await graphql(`
        {
            allStateDataJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        console.log('error retrieving data', result.errors);
        return
    }

    const statePageTemplate = require.resolve('./src/templates/statePage.js');

    result.data.allStateDataJson.edges.forEach(edge => {
        createPage({
            path: `/${edge.node.slug}/`,
            component: statePageTemplate,
            context: {
                slug: edge.node.slug,
            }
        })
    })
}