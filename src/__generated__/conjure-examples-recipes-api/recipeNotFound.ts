export interface IRecipeNotFound {
    'errorCode': "NOT_FOUND";
    'errorInstanceId': string;
    'errorName': "Recipe:RecipeNotFound";
    'parameters': {
        name: string;
    };
}

export function isRecipeNotFound(arg: any): arg is IRecipeNotFound {
    return arg && arg.errorName === "Recipe:RecipeNotFound";
}
