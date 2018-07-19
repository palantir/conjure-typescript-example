/**
 * @license Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import * as React from "react";
import { connect } from "react-redux";
import { IRecipesAppState } from "./store";
import { IRecipe } from "./store/state/recipesData";

export interface IRecipesAppStateProps {
    recipes: IRecipe[];
}

export type IExampleAppProps = IRecipesAppStateProps;

class UnconnectedRecipesApp extends React.PureComponent<IExampleAppProps> {
    public render() {
        return <div className="foundry-example-app">hello world</div>;
    }
}

function mapStateToProps(state: IRecipesAppState): IRecipesAppStateProps {
    return {
        recipes: state.recipesData.recipes,
    };
}

export const RecipesApp = connect(mapStateToProps)(UnconnectedRecipesApp);
