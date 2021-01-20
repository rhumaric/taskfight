> This repository is now [hosted on Gitlab](https://gitlab.com/romaricpascal/taskfight). Please head there if you wish to contribute. Thanks 🙂

React base project
==================

Base project for quickly starting to build a React app.

Build is coordinated by NPM and relies on:
 - webpack & babel for JS
 - SASS for CSS
 - Pug for HTML

Sources are in the `src` folder and the result of the build will get into `www`

During development, use `npm run dev` to watch files and rebuild the different parts of the project.
`npm run build` will produced minified version of the files for when it's time to deploy.

There's also `build:xxx` and `dev:xxx` scripts to run specific parts of the build 
(eg. `npm run dev:js` to only watch and rebuild JS files).

Last `npm start` will run browser-sync to server the `www` folder (the `dev` script will start the server too).
