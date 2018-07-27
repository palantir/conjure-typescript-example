# conjure-typescript-example
A small recipe frontend application that demonstrates the simple usage of conjure tooling.

## Overview

#### Tools and Libraries

This example project uses the following tools and libraries, please consult their respective documentation for more information.

* [conjure-typescript-client] - conjure client bindings for typescript
* [conjure-recipe-example-api] - Generated Typescript API for the RecipeBookService
   * Generated and published by [conjure-java-example] from [this conjure API][recipe-example-api]
* [yarn](https://yarnpkg.com/en/) - a flexible build tool for frontend development

#### Project Structure

* `conjure-recipe-example-app` - a react application project that uses conjure generated typescript bindings for talking to a server that implements the same Conjure API

    This is what the project looks like:
    ```
    ├── package.json
    ├── public
    │   ├── index.html
    │   └── manifest.json
    ├── src
    │   ├── components
    │   │   ├── createRecipeDialogue.tsx
    │   │   ├── header.tsx
    │   │   └── recipeItem.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── recipesApp.tsx
    │   ├── services
    │   │   └── index.ts
    │   └── store
    │       ├── actions
    │       │   ├── index.ts
    │       │   ├── interfaceActions.ts
    │       │   └── recipesActions.ts
    │       ├── createStore.ts
    │       ├── index.ts
    │       ├── reducers
    │       │   ├── index.ts
    │       │   ├── interfaceReducer.ts
    │       │   └── recipesReducer.ts
    │       ├── state
    │       │   ├── interfaceData.ts
    │       │   └── recipesData.ts
    │       └── state.ts
    ├── tsconfig.json
    ├── tsconfig.prod.json
    ├── tsconfig.test.json
    ├── tslint.json
    └── yarn.lock
    ```
    * package.json - configures the yarn project with the necessary dependencies and build scripts
    * src/recipesApp.tsx - the main component of this app
    * src/components - defines react components
    * src/services - uses [conjure-typescript-client] and the generated [conjure-recipe-example-api] to define a remote `RecipeBookService`
    * src/store - defines the redux store for this app
        * src/store/actions - defines actions that are exported to the react app
        * src/store/reducers - defines reducers that implement the behaviour of the actions on the state 
        * src/store/state - defines the state type hierarchy
    * tsconfig.json - configures the typescript compiler
    * yarn.lock - lock file for the dependency versions chosen by yarn upon the last `yarn install` invocation
    * public/index.html - static entry point defining required CSS files
    * public/manifest.json - metadata necessary for adding the app to the Android home screen
    
## Development

#### Useful Yarn Commands:

* `yarn build` to build and test the project
* `yarn start` to run a development build and start serving the app
* `yarn lint --fix` to fix any lint errors in the entire project

#### Generate New or Modify Existing APIs

Please follow [this section](https://github.com/palantir/conjure-java-example#generate-new-or-modify-existing-apis) in 
[conjure-java-example]'s readme.



[conjure-typescript-client]: https://github.com/palantir/conjure-typescript-client/
[conjure-recipe-example-api]: https://www.npmjs.com/package/conjure-recipe-example-api
[conjure-java-example]: https://github.com/palantir/conjure-java-example
[recipe-example-api]: https://github.com/palantir/conjure-java-example/blob/develop/recipe-example-api/src/main/conjure/recipe-example-api.yml
