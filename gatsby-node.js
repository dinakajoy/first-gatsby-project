const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        site {
          siteMetadata {
            servicesdata {
              details
              name
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.site.siteMetadata.servicesdata.forEach((service) => {
        createPage({
          path: `/services/${service.slug}`,
          component: path.resolve(`./src/templates/service-single.js`),
          context: { service },
        });
      });
      resolve();
    });
  });
};
