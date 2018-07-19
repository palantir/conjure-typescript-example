/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */

import { TypedAction } from "redoodle";
import { IRecipe } from "../state/recipesData";

export const AddRecipes = TypedAction.define("recipesData::add_recipes")<IRecipe[]>();
