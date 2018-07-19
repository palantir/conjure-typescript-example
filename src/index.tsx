/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RecipesApp } from "./recipesApp";
import { createConfiguredStore } from "./store";

// Create the store
const store = createConfiguredStore();

// Render the app
ReactDOM.render(
    <Provider store={store}>
        <RecipesApp />
    </Provider>,
    document.getElementById("root"),
);
