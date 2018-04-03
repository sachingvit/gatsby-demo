/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
    console.log("graphql init");
    const {createPage} = boundActionCreators;

    return new Promise((resolve, reject) => {

        const blogPostTemplate = path.resolve('src/templates/blog-post.js');

        resolve(graphql(`
        {
            allContentfulPost (limit:1) {
              edges {
                node {
                  id
                  slug
                  comments
                  author {
                    id
                    name
                    website
                  }
                }
              }
            }
          }
            `).then((result) => {
            console.log("result", result);
            if (result.errors) {
                reject(result.errors)
            }

            result
                .data
                .allContentfulPost
                .edges
                .forEach((edge) => {
                    console.log("edge", edge);
                    createPage({
                        path: edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })

            return;
        }))
    })

    // return new Promise((resolve, reject) => {     resolve(graphql(`   myappdata:
    // allContentfulContactUs (       filter: {               node_locale: "en-US"
    //   })     {     edges {         node {                 title
    // slug         }     } }`)) }).then(result=>{     console.log("result",
    // result); })
}