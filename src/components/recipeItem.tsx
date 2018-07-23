/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */
import { Card, H5 } from "@blueprintjs/core";
import * as React from "react";
import { IRecipe, IRecipeStep } from "../__generated__";

export interface IRecipeItemProps {
    recipe: IRecipe;
}

export class RecipeItem extends React.PureComponent<IRecipeItemProps> {
    public render() {
        const {
            recipe: { steps, name },
        } = this.props;
        return (
            <Card>
                <H5>{name}</H5>
                <div>steps:</div>
                {steps.map(this.renderStep)}
            </Card>
        );
    }

    private renderStep = (step: IRecipeStep, index: number) => {
        return (
            <div key={index}>
                <div>{step.type}</div>
                <div>{JSON.stringify(step[step.type])}</div>
            </div>
        );
    };
}
