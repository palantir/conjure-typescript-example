/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */
import { Classes, Dialog } from "@blueprintjs/core";
import { IRecipe } from "conjure-recipe-example-api";
import * as React from "react";

export interface ICreateRecipeDialogueStateProps {
    isDialogueOpen: boolean;
}

export interface ICreateRecipeDialogueDispatchProps {
    createNewRecipe: (recipe: IRecipe) => void;
}

export type ICreateRecipeDialogueProps = ICreateRecipeDialogueStateProps & ICreateRecipeDialogueDispatchProps;

export class CreateRecipeDialogue extends React.PureComponent<ICreateRecipeDialogueProps> {
    public render() {
        const { isDialogueOpen } = this.props;
        return (
            <Dialog icon="plus" onClose={this.createNewRecipe} isOpen={isDialogueOpen}>
                <div className={Classes.DIALOG_BODY}>Hello world</div>
            </Dialog>
        );
    }

    private createNewRecipe = () => {
        this.props.createNewRecipe({
            name: "foo",
            steps: [{ type: "mix", mix: ["foo", "bar"] }],
        });
    };
}
