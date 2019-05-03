
<img alt="Reactyv logo" src="/static/Reactyv_Logo.png"/>

### Reactyv : React . RxJS . Next.js
Next-Gen functional & reactive Web Application architecture - to solve problems of real-time nature with efficiency, and elan!

> Note: For Non-RxJS based implementation visit: https://github.com/SapInnovation/reactyv/tree/noRxJsDemo
## Features
- ***UI component library integrated***
- ***Hot-reload ready for Dev - with live linting***
- ***Next Generation CSS (CSS-in-JS)***
- ***SEO-Ready***
- ***ESLint integrated***
- ***Pre-commit/Pre-push hooks***

## How to use

- Firstly, clone the repo with this command.

```bash
git clone https://github.com/SapInnovation/reactyv.git
cd reactyv
npm install
```

- If you are not using NPM, just run ```yarn``` instead of ```npm install```
- After everything is finished, run ```npm run dev``` (or ```yarn dev```)
> For running in `production` mode first prepare the build by running `npm run build` and then type `npm run start` and hit enter

> *Note: The project is developed on a Mac running Node `8.9.3` and uses modern javascript constructs(ES6/ES7). Please have the same Node version(or any from `8.x.x` series) pre-installed to set-up and run the app without any issues*

And that's all!

## Folder Structure
```
├─ ry - (Reactyv's namespace) to hold all App code except pages
│  ├─ components - all the React UI components
│  │  ├─ Layout.js: one layout to rule `em all
│  │  ├─ Header.js: page header
│  │  └─ ...: place similar implementations
│  ├─ core - core utilities to make working with libraries easier
│  │  ├─ api.js: simple wrapper around axios
│  │  └─ ...: place similar implementations
│  ├─ services - API wrappers
│  │  ├─ ProductService.js: exposes method to interact with Catalog API
│  │  └─ ...: place similar implementations
│  └─ styles - app's custom CSS
│     ├─ slider.css:
│     └─ ...:
├─ pages - all the pages(client/server) made available to browse
│  ├─ product: Product page
│  ├─ index: Index page
│  └─ ...: place similar implementations
├─ static: assets directory to hold images, font, compiled CSS, etc.
├─ server.js: server-side/app bootstrap script
├─ next.config.js: NextJS config file to allow customization of the different aspects of the framework
├─ .eslintrc: rules for validating code against ES6/ES7/React standards
├─ .babelrc: instructions for transpiler
├─ package.json: all the project dependencies
├─ package-lock.json: lockfile for all the dependencies...
└─ .editorconfig: code editor config file for consistent indentation/formatting

```

## Design preview
<img alt="Reactyv preview" src="/static/reactyv_preview.png"/>

## Tech/Tools/Components
- React
- RxJS
- NextJS
- Webpack
- Babel
- ESLint
- ...
