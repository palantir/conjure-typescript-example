import * as IRecipeStep from "./recipeStep";

export interface IRecipe {
    name: string;
    steps: IRecipeStep.IRecipeStep[];
}
