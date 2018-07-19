/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */
import { IRecipesDataState } from "./state/recipesData";

export interface IRecipesAppState {
    recipesData: IRecipesDataState;
}
