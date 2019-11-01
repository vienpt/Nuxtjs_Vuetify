# Nuxtjs_Vuetify

## Nuxt generate admin management

```bash

# Install npx and run command
npx create-nuxt-app nuxtjs_vuetify

# manual step
create-nuxt-app v2.11.1
✨  Generating Nuxt.js project in nuxtjs_vuetify
? Project name sshpoc_admin
? Project description admin management
? Author name Vien Pham
? Choose the package manager `Npm`
? Choose UI framework `Vuetify.js`
? Choose custom server framework `None (Recommended)`
? Choose Nuxt.js modules `Axios, Progressive Web App (PWA) Support`
? Choose linting tools `ESLint`
? Choose test framework `Jest`
? Choose rendering mode `Universal (SSR)`
? Choose development tools `jsconfig.json (Recommended for VS Code)`
⠼ Installing packages with npm
```

## Build Setup

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

- Enable common format by vscode

> install extension: prettier, eslint

```json
    "editor.formatOnPaste": false,
    "editor.formatOnSave": true,
    "editor.formatOnType": false,
    "prettier.semi": true,
    "prettier.requireConfig": true,
    "prettier.tabWidth": 2,
    "prettier.useTabs": false,
    "prettier.singleQuote": true,
    "files.insertFinalNewline": true,
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //* format space-before-function-paren
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    //*
    "[vue]": {
        "editor.formatOnSave": false
    }
```
