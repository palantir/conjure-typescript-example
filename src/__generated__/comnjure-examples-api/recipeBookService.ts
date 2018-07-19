import { IHttpApiBridge, MediaType } from "conjure-client";
import { IRecipe } from "../conjure-examples/recipe";

/**
 * APIs for retrieving recipes
 *
 */
export interface IRecipeBookService {
    /**
     * Retrieves a recipe for the given name.
     *
     * @param name
     *        The name of the recipe
     *
     */
    getRecipe(name: string): Promise<IRecipe>;
}

export class RecipeBookService {
    constructor(private bridge: IHttpApiBridge) {}

    public getRecipe(name: string): Promise<IRecipe> {
        return this.bridge.callEndpoint<IRecipe>({
            data: undefined,
            endpointName: "getRecipe",
            endpointPath: "/recipes/{name}",
            headers: {},
            method: "GET",
            pathArguments: [name],
            queryArguments: {},
            requestMediaType: MediaType.APPLICATION_JSON,
            responseMediaType: MediaType.APPLICATION_JSON,
        });
    }
}
