## React POC

This POC (Proof of concept) is intended to be use as base or demo for projects with React.

There is also another repository that serves backend data: https://github.com/raulrotundo/nodejs-server-poc

Demo: [https://react-app-poc.herokuapp.com](https://react-app-poc.herokuapp.com)

User: bret
Password: 1234

### What's included?
* [NPM](https://www.npmjs.com/) for package manager.
* [React Create App](https://github.com/facebookincubator/create-react-app) Create React apps with no build configuration.
* [React Rotuter](https://reacttraining.com/react-router/)  React Router is a collection of navigational components that compose declaratively with your application.
* [Redux](http://redux.js.org/)  Redux is a predictable state container for JavaScript apps.
* [Bootstrap](https://www.npmjs.com/package/bootstrap) Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
* [Font Awesome](http://fontawesome.io/) Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.
* [Jest](https://facebook.github.io/jest/) Delightful JavaScript Testing for test-runner.
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage.

### Prerequisites
* Rename .sample-env to .env
* Install [NodeJS](https://nodejs.org/en/download/) and :
```bash
npm install -g http-server
```

### Installation
Clone the repo: 
```bash
git clone git@github.com:raulrotundo/react-poc.git
```

Installing dependencies: 
```bash
npm install
```

### Start
Let's start up, run:
```bash
npm start
```

Finally go to:
```bash
http://localhost:3000
```

Code Coverage Report:
```bash
npm run coverage
```