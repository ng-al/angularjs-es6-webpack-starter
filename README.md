#AngularJS - ES6 - Starter

This project is a minimal AngularJS 1.x application built with ECMAScript classes.
It was primarily created to test the feasibilty of using ES6 with ANgularJS in production code.
The *test* was successful, thus I am sharing the code so that other developers can develop with "objective Angular".

The project uses webpack which performs two functions: Babel transpiling, and module loading.
The project is initialized with the following components:

* angular (1.5 +)
* angular-route (ngRoute)
* angular-ui-bootstrap
* bootstrap CSS
* font-awesome

## Building and Executing

The project uses npm exclusively, both for dependencies and script execution.
Once the project is loaded, use npm to resolve all the build-time and run-time dependencies

```npm install```

There are three scripts:

* npn run build: This rebuilds the www folder.
* npm run start: This starts the webpack server.
* npm run serve: This runs both build and start.

Once the app is running, browse to http://localhost:9100

Have fun,

Angular Al