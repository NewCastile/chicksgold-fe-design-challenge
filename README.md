# Chicks Gold FE Design Challenge Solution Documentation

# Technologies

-   React
-   Typescript
-   ViteJS
-   Eslint
-   Prettier

# Installation

Download the code or clone the repository then access to the projects folder and run the following command in your terminal:

`npm install` or `npm install`

then run `npm run dev` to start the project

# Eslint config

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.

You can find the projects's eslint configuration in the `.eslintrc.cjs` file

For this for this project the core plugins are:

-   `@typescript-eslint/eslint-plugin`: An ESLint plugin which provides lint rules for TypeScript codebases.

-   `eslint-plugin-react`: For React specific linting rules.

-   `eslint-plugin-react-hooks`: To enforce React's Rules of Hooks.

-   `eslint-plugin-import`: To support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.

-   `eslint-import-resolver-typescript`: Which adds typescript support to `eslint-plugin-import`.

-   `eslint-config-prettier`: To turn off all the linter rules that are unnecessary or might conflict with Prettier.

# Prettier config

Prettier is an opinionated code formatter with support for various programming languages incluiding TypeScript. It removes all original styling and ensures that all outputted code conforms to a consistent style.

Just as Eslint prettier its pluggable. The only prettier plugin ths projects uses is `prettier-plugin-css-order`.

You can see the prettier configuration in the `.prettierrc` file.

Be sure to include the follwing files and folders in the
`.prettierignore` file:

-   `package-lock.json`
-   `node_modules/`
-   `dist/`
-   `public/`

## Project structure

-   `data` folder: This folder contains all the mock data used to render all the components of the page, including images information, icon components, and importation data for rendering the elements of the page: The header, the items grid and the footer.

-   `components` directories: As it's name says, this folder contains all the components that compose the aforementioned elements.

    Each subfolder is named after the elements or group of elements its going to contain. Each of these folders stores the components `.tsx` files and `.css` files it needs to properly render.

    In cases where subcomponents are divided in many multiple complex components the folder structure is the following.

    ```
    -[parent-component-name]
        - [lib]
            - sub-component-a.tsx
            - sub-component-b.tsx
        -index.tsx
        -styles.css
    ```

-   `shared` folder: The shared folder contains elements that are common between components of the same group.

-   `types` folder: Contains all the typings of the components and constants of the projects.

-   `utils` folder: Contains utility functions to simplify certain features of the components.

-   `assets` folder: Store all the assets of the project.

## BEM notation

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Taking into account BEM's notation every CSS selector was named following the pattern

`block__element--modifier`

-   Where blocks are elements that supose a standalone entity with a name meaningful on its own.

-   Elements are that form parts of a block and dont have a distinguishable name separated from its parent.

-   Modifier are flags that only represent a change on its companion appearance, behavior or state, such as its colors or visibility.

CSS variables where used to simplify the creation of the modifier selectors. The variables can all be found in the `App.css` file in `src` directory

## Responsive Design

The page has to be visible in the mutiple devices. The design and development of the responsive layouts where made following ChicksGold official website and with the help of Opera Browser's toggle device tool, making a responsive layout that fits the dimensions for the majority of the devices screens.
