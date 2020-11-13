import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCES_TOKEN as string
});

export default client;
