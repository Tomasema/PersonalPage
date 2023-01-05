# Portfolio

This template was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

---

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development server options

to serve normal use this configuration:

```
  yarn start
```

to serve and automatically open the browser use this configuration:

```
  yarn start:open
```

to serve and access from a local network use this configuration:

```
  yarn start:host
```

<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. -->

---

## Build

Run `yarn build:option` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build options

to compile for `development` use this configuration:

```
  yarn build:dev
```

to compile for `production` use this configuration:

```
  yarn build:prod
```

to compile for `webpack-bundle-analyzer` use this configuration:

```
  yarn build:stats
```

---

## Linter

Run `yarn lint` to show in the terminal the error that linter finds according to the configuration

### Linter options

to show error use this configuration:

```
  yarn lint
```

to show error and automatically fix it use this configuration:

```
  yarn lint:fix
```

to run linter default inside angular use this configuration:

```
  yarn lint:ng
```

---

## Husky

At the end of the installation of all the packages, husky will be installed, a tool that will allow us to automatically run `git hooks`, in our case to run the `commitlint` and `eslint` linters before committing.

---

## Tools

### Webpack Bundle Analyzer

`Webpack-bundle-analyzer` is a tool that allows us to graphically see when our application weighs and segmented by modules, this helps us to discover failures in the application's performance

to use `webpack-bundle-analyzer`, before you must use this command `yarn build:stats` which generates the stats files that allow webpack-bundle-analyzer to work properly

```
  yarn analyze || npm run analyze
```

### Sample of comments to use in deferent sections

```
  // Angular Imports
  // Angular Fire Imports
  // Shared Imports
  // Another Module Imports
  // Store Imports
  // This Component Imports
  // This Module Imports
  // Thirdparty Imports
  // Ionic Imports
```

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). -->

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->
