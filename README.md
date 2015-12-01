# angular2-typescript-jspm-systemjs-router-seed

## Prerequisites

Makre sure you have [NodeJS](https://nodejs.org/download/) installed.

## Installation

To install all of the required dependecies run:

    npm i

Your application should be ready to run now.

## Run

You can run app server in two modes.

### Development

This is the simples way to get started.

    npm run dev-server

and visit [http://127.0.0.1:8080/](http://127.0.0.1:8080/) unless it won't open automatically.

### Production

You need to do two steps to start application in production mode.

1. Bundle application

        npm run bundle

  This will create appropriate mappings in `config.js` file.
  
2. Start production server

        npm start
        
   And visit [http://localhost:8080/](http://localhost:8080/).
   
Remember to unbundle application if you want to work with it in development mode:

    npm run unbundle

## Deployment and workflow

The application can being depolyed automatically to `Heroku`.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)