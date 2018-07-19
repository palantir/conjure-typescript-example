/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */

export interface IRecipesDataState {
    recipes: IRecipe[];
}

export interface IRecipe {
    name: string;
    steps: IRecipeStep[];
}

export type IRecipeStep = IMixStep | IChopStep | IRecipeBakeStep;

export interface IMixStep {
    type: "mix";
    mix: string[];
}

export interface IChopStep {
    type: "chop";
    chop: string;
}

export interface IRecipeBakeStep {
    type: "bake";
    bake: IBakeStep;
}

export interface IBakeStep {
    temperature: number;
    durationInSeconds: number;
}

export const initialRecipesDataState: IRecipesDataState = {
    recipes: [],
};
