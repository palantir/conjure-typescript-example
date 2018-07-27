/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */
import { Card, H5 } from "@blueprintjs/core";
import * as Moment from "moment";
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
                <ol>{steps.map(this.renderStep)}</ol>
            </Card>
        );
    }

    private renderStep = (step: IRecipeStep, index: number) => {
        let recipeContent: JSX.Element | JSX.Element[];
        if (step.type === "mix") {
            recipeContent = <ul>{step.mix.map((inner, i) => <li key={i}>{inner}</li>)}</ul>;
        } else if (step.type === "chop") {
            recipeContent = <span>{step.chop}</span>;
        } else {
            const {
                temperature: { degree, unit },
                durationInSeconds,
            } = step.bake;
            const duration = Moment.duration(durationInSeconds, "seconds").humanize();
            recipeContent = <div>{`${duration} at a temperature of ${degree}° ${unit}`}</div>;
        }
        return (
            <li key={index}>
                <div>{step.type}</div>
                <div>{recipeContent}</div>
            </li>
        );
    };
}
