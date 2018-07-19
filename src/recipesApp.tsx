/**
 * @license Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import { Button, H2 } from "@blueprintjs/core";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRecipe } from "./__generated__";
import { IRecipesAppState } from "./store";
import { AddRecipes } from "./store/actions";

export interface IRecipesAppStateProps {
    recipes: IRecipe[];
}

export interface IRecipesAppDispatchProps {
    createNewRecipe: () => void;
}

export type IExampleAppProps = IRecipesAppStateProps & IRecipesAppDispatchProps;

class UnconnectedRecipesApp extends React.PureComponent<IExampleAppProps> {
    public render() {
        const { recipes, createNewRecipe } = this.props;
        return (
            <div className="foundry-example-app">
                <div>Recipes</div>
                <Button onClick={createNewRecipe}>New Recipe</Button>
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
}

export const RecipesApp = connect(
    (state: IRecipesAppState): IRecipesAppStateProps => ({
        recipes: state.recipesData.recipes,
    }),
    (dispatch: Dispatch): IRecipesAppDispatchProps => ({
        createNewRecipe: () =>
            dispatch(
                AddRecipes.create([
                    {
                        name: "foo",
                        steps: [
                            {
                                type: "chop",
                                chop: "something",
                            },
                            {
                                type: "bake",
                                bake: {
                                    temperature: {
                                        degree: 100,
                                        unit: "celcius",
                                    },
                                    durationInSeconds: 10,
                                },
                            },
                        ],
                    },
                ]),
            ),
    }),
)(UnconnectedRecipesApp);
