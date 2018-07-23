import { IRecipe } from "./recipe";
import { IHttpApiBridge, MediaType } from "conjure-client";

/**
 * APIs for retrieving recipes
 * 
 */
export interface IRecipeBookService {
    createRecipe(createRecipeRequest: IRecipe): Promise<void>;
    /**
     * Retrieves a recipe for the given name.
     * 
     * @param name
     *        The name of the recipe
     * 
     */
    getRecipe(name: string): Promise<IRecipe>;
    getAllRecipes(): Promise<Array<IRecipe>>;
    deleteRecipe(name: string): Promise<void>;
}

export class RecipeBookService {
    constructor(private bridge: IHttpApiBridge) {
    }

    public createRecipe(createRecipeRequest: IRecipe): Promise<void> {
        return this.bridge.callEndpoint<void>({
            data: createRecipeRequest,
            endpointName: "createRecipe",
            endpointPath: "/recipes",
            headers: {
            },
            method: "POST",
            pathArguments: [
            ],
            queryArguments: {
            },
            requestMediaType: MediaType.APPLICATION_JSON,
            responseMediaType: MediaType.APPLICATION_JSON,
        });
    }

    public getRecipe(name: string): Promise<IRecipe> {
        return this.bridge.callEndpoint<IRecipe>({
            data: undefined,
            endpointName: "getRecipe",
            endpointPath: "/recipes/{name}",
            headers: {
            },
            method: "GET",
            pathArguments: [
                name,
            ],
            queryArguments: {
            },
            requestMediaType: MediaType.APPLICATION_JSON,
            responseMediaType: MediaType.APPLICATION_JSON,
        });
    }

    public getAllRecipes(): Promise<Array<IRecipe>> {
        return this.bridge.callEndpoint<Array<IRecipe>>({
            data: undefined,
            endpointName: "getAllRecipes",
            endpointPath: "/recipes",
            headers: {
            },
            method: "GET",
            pathArguments: [
            ],
            queryArguments: {
            },
            requestMediaType: MediaType.APPLICATION_JSON,
            responseMediaType: MediaType.APPLICATION_JSON,
        });
    }

    public deleteRecipe(name: string): Promise<void> {
        return this.bridge.callEndpoint<void>({
            data: undefined,
            endpointName: "deleteRecipe",
            endpointPath: "/recipes/{name}",
            headers: {
            },
            method: "DELETE",
            pathArguments: [
                name,
            ],
            queryArguments: {
            },
            requestMediaType: MediaType.APPLICATION_JSON,
            responseMediaType: MediaType.APPLICATION_JSON,
        });
    }
}
