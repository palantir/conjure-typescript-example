/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */

import { combineReducers, reduceCompoundActions, Reducer } from "redoodle";
import { IRecipesAppState } from "../state";
import { recipesReducer } from "./recipesReducer";

export const reducer: Reducer<IRecipesAppState> = reduceCompoundActions(
    combineReducers<IRecipesAppState>({
        recipesData: recipesReducer,
    }),
);
