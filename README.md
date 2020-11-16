![GameBros](public/img/gamebros-logo.svg)

Front-end client of the [game-bros.net](https://game-bros.net) website, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Site content is managed through [Contentful](http://contentful.com).

## Getting Started

### Prequisites
* [Node.js](https://nodejs.org/en/)
* [Contentful space](https://www.contentful.com/)

### Installation

To install dependencies, run:

```
$ npm install
```

### Environment variables

Before running the app you need to set up a few environment variables. This can be achieved by adding `.env.development` file to the root of the project. Example of the required variables can be found from `.env.example`. The required values can be found from Api keys section of the Contentful space settings. Never commit these values to git.


## Development

### Running local development server

To start local development server, run:

```
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Updating contentful schema

After updating content models in the Contentful space, the schema needs to be updated to the app. To update schema, run:

```
$ npm run codegen
```

Schema should never be updated manually. Always use the above script to generate new schema.

## Deployment

GameBros website is automatically built and deployed to Netlify. You can learn more about Netlify from here [netlify.com](https://www.netlify.com).

Build command:

```
$ npm run build
```

Build folder: `build`