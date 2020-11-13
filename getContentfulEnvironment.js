const contentfulManagement = require('contentful-management');
require('dotenv-safe').config()

console.log(process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, process.env.CONTENTFUL_ENVIRONMENT);
module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
  });

  return contentfulClient
    .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
}
