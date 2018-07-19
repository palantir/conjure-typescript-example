/**
 * @license Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import { Button } from "@blueprintjs/core";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRecipesAppState } from "./store";
import { IRecipe } from "./store/state/recipesData";

export interface IRecipesAppStateProps {
    recipes: IRecipe[];
}

export interface IRecipesAppDispatchProps {
    createNewRecipe: () => void;
}

export type IExampleAppProps = IRecipesAppStateProps & IRecipesAppDispatchProps;

class UnconnectedRecipesApp extends React.PureComponent<IExampleAppProps> {
    public render() {
        const { createNewRecipe } = this.props;
        return (
            <div className="foundry-example-app">
                <div>Recipes</div>
                <Button icon="folder-open" onClick={createNewRecipe}>
                    foo
                </Button>
            </div>
        );
    }
}

export const RecipesApp = connect(
    (state: IRecipesAppState): IRecipesAppStateProps => ({
        recipes: state.recipesData.recipes,
    }),
    (dispatch: Dispatch): IRecipesAppDispatchProps => ({
        createNewRecipe: () => {
            // tslint:disable
            console.log("foo");
        },
    }),
)(UnconnectedRecipesApp);
