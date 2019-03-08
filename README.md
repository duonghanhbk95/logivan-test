# LOGIVAN-TEST

## Table of Contents
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Available Scripts](#available-scripts)
1. [Learn More](#learn-more)
## Getting Started

### Install from source
* **Note: requires a node version >= 8.12.0 and an npm version >= 6.**

First, clone the project:

```bash
$ git clone https://github.com/duonghanhbk95/logivan-test.git
$ cd logivan-test
```
Then install dependencies and check to see it works. It is recommended that you use Yarn for deterministic installs, but npm install will work just as well.

Magic command to install all dependencies and start development

```bash
$ yarn install && yarn dev
```
We should install electron before install other modules, for some reason, we may NOT install electron along with others. **Please note 

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── docs                     # Application's docs
├── public                   # Static public assets (not imported anywhere in source code)
├── src                      # Application source code
|   ├── index.js              # Application and rendering React code
│   ├── constants            # Definition constant app's variables
│   ├── actions              # Global Redux Actions definition
│   ├── reducers             # Global Redux Reducers definition
│   ├── store                # Global Redux Store definition (do not touch this config)
│   │
│   ├── components           # Global Reusable Presentational Components
│   │   ├── Home             #
│   │   ├── Drivers          #
│   │   └── Shared           #
.
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run dev`

Runs the app in the development mode.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
