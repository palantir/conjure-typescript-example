/**
 * @license Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 */

import { Button, Classes, Dialog, Icon, Intent, Radio, RadioGroup } from "@blueprintjs/core";
import { IBakeStep, IRecipe, IRecipeStep } from "conjure-recipe-example-api";
import * as React from "react";

import "./createRecipeDialog.css";

export interface ICreateRecipeDialogStateProps {
    isDialogOpen: boolean;
}

export interface ICreateRecipeDialogDispatchProps {
    closeDialog: () => void;
    createNewRecipe: (recipe: IRecipe) => void;
}

type ICreateRecipeDialogState = IRecipe;

export type ICreateRecipeDialogProps = ICreateRecipeDialogStateProps & ICreateRecipeDialogDispatchProps;

export class CreateRecipeDialog extends React.PureComponent<ICreateRecipeDialogProps, ICreateRecipeDialogState> {
    public static handleStringChange(handler: (value: string) => void) {
        return (event: React.FormEvent<HTMLElement>) => handler((event.target as HTMLInputElement).value);
    }

    private static createDefaultRecipeStep(type: string): IRecipeStep {
        if (type === "mix") {
            return { type: "mix", mix: ["foo", "bar"] };
        } else if (type === "chop") {
            return { type: "chop", chop: "" };
        } else {
            return { type: "bake", bake: { temperature: { degree: 350, unit: "Farenheit" }, durationInSeconds: 600 } };
        }
    }

    public state = {
        name: "",
        steps: [],
    };

    private handleNameChange = CreateRecipeDialog.handleStringChange(name => this.setState({ ...this.state, name }));

    public render() {
        const { isDialogOpen, closeDialog } = this.props;
        const { name, steps } = this.state;
        return (
            <Dialog
                className="rp-create-dialog"
                icon="plus"
                title="Create new recipe"
                onClose={closeDialog}
                isOpen={isDialogOpen}
                isCloseButtonShown={false}
            >
                <div className={"rp-create-dialog-body " + Classes.DIALOG_BODY}>
                    <input type="text" onChange={this.handleNameChange} value={name} placeholder="Recipe name" />
                    {steps.map(this.renderStep)}
                    <div className="add-more-steps" onClick={this.addStep}>
                        <div className="accent-line" />
                        <div>
                            <Icon icon="plus" />
                        </div>
                        <div className="accent-line" />
                    </div>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button intent={Intent.DANGER} onClick={closeDialog}>
                            Close
                        </Button>
                        <Button intent={Intent.SUCCESS}>Create Recipe</Button>
                    </div>
                </div>
            </Dialog>
        );
    }

    private renderStep = (step: IRecipeStep, index: number) => {
        let stepBody: JSX.Element | JSX.Element[];
        if (step.type === "mix") {
            stepBody = this.renderMixStep(step.mix, index);
        } else if (step.type === "chop") {
            stepBody = this.renderChopStep(step.chop, index);
        } else {
            stepBody = this.renderBakeStep(step.bake, index);
        }
        return (
            <div className="recipe-step bp3-card" key={index}>
                <div className="step-header">
                    <RadioGroup onChange={this.handleStepChange(index)} inline={true} selectedValue={step.type}>
                        <Radio label="Mix" value="mix" />
                        <Radio label="Chop" value="chop" />
                        <Radio label="Bake" value="bake" />
                    </RadioGroup>
                    <div className={Classes.TEXT_LARGE}>{}</div>
                    <Button className={Classes.MINIMAL} icon="cross" onClick={this.handleRemoveStep(index)} />
                </div>
                {stepBody}
            </div>
        );
    };

    private renderMixStep(ingredients: string[], stepIndex: number) {
        return (
            <div className="mix-body">
                {ingredients.map((ingredient, i) => (
                    <input
                        type="text"
                        key={i}
                        onChange={this.handleNameChange}
                        value={ingredient}
                        placeholder="Recipe name"
                    />
                ))}
            </div>
        );
    }

    private renderChopStep(ingredient: string, stepIndex: number) {
        return <div />;
    }

    private renderBakeStep(bake: IBakeStep, stepIndex: number) {
        return <div />;
    }

    private addStep = () => {
        this.setState({
            ...this.state,
            steps: [...this.state.steps, CreateRecipeDialog.createDefaultRecipeStep("mix")],
        });
    };

    private handleStepChange(index: number) {
        return (event: React.FormEvent<HTMLInputElement>) => {
            const type = (event.target as HTMLInputElement).value;
            this.setState({
                ...this.state,
                steps: [
                    ...this.state.steps.slice(0, index),
                    CreateRecipeDialog.createDefaultRecipeStep(type),
                    ...this.state.steps.slice(index + 1),
                ],
            });
        };
    }

    private handleRemoveStep(index: number) {
        return () => {
            this.setState({
                ...this.state,
                steps: [...this.state.steps.slice(0, index), ...this.state.steps.slice(index + 1)],
            });
        };
    }
}
