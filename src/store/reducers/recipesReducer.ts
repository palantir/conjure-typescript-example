/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */

import { Reducer, TypedReducer } from "redoodle";
import { initialRecipesDataState, IRecipesDataState } from "../state/recipesData";

export const recipesReducer: Reducer<IRecipesDataState> = TypedReducer.builder<IRecipesDataState>()
    .withDefaultHandler((state = initialRecipesDataState) => state)
    .build();
