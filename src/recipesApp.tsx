/**
 * @license Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import { H2 } from "@blueprintjs/core";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRecipe } from "./__generated__";
import { CreateRecipeDialogue } from "./components/createRecipeDialogue";
import { Header } from "./components/header";
import { IRecipesAppState } from "./store";
import { AddRecipes } from "./store/actions";
import { SetIsDialogueOpen } from "./store/actions/interfaceActions";

export interface IRecipesAppStateProps {
    recipes: IRecipe[];
    isDialogueOpen: boolean;
}

export interface IRecipesAppDispatchProps {
    createNewRecipe: (recipe: IRecipe) => void;
    setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export type IExampleAppProps = IRecipesAppStateProps & IRecipesAppDispatchProps;

class UnconnectedRecipesApp extends React.PureComponent<IExampleAppProps> {
    public render() {
        const { recipes, isDialogueOpen } = this.props;
        return (
            <div className="foundry-example-app">
                <CreateRecipeDialogue isDialogueOpen={isDialogueOpen} createNewRecipe={this.createNewRecipe} />
                <Header createNewRecipe={this.openCreateRecipeDialogue} />
                {recipes.map(({ name, steps }, index) => (
                    <div key={index}>
                        <H2>{name}</H2>
                        {steps.map((step, i) => (
                            <div key={i}>
                                <div>{step.type}</div>
                                <div>{JSON.stringify(step[step.type])}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    private openCreateRecipeDialogue = () => {
        this.props.setIsDialogOpen(true);
    };

    private createNewRecipe = (recipe: IRecipe) => {
        this.props.createNewRecipe(recipe);
        this.props.setIsDialogOpen(false);
    };
}

export const RecipesApp = connect(
    (state: IRecipesAppState): IRecipesAppStateProps => ({
        recipes: state.recipesData.recipes,
        isDialogueOpen: state.interfaceData.isDialogueOpen,
    }),
    (dispatch: Dispatch): IRecipesAppDispatchProps => ({
        setIsDialogOpen: isDialogueOpen => dispatch(SetIsDialogueOpen.create(isDialogueOpen)),
        createNewRecipe: recipe => dispatch(AddRecipes.create([recipe])),
    }),
)(UnconnectedRecipesApp);
