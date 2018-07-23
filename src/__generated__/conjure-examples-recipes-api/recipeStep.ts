import { IBakeStep } from "./bakeStep";

export interface IRecipeStep_Mix {
    'mix': Array<string>;
    'type': "mix";
}

export interface IRecipeStep_Chop {
    'chop': string;
    'type': "chop";
}

export interface IRecipeStep_Bake {
    'bake': IBakeStep;
    'type': "bake";
}

function isMix(obj: IRecipeStep): obj is IRecipeStep_Mix {
    return (obj.type === "mix");
}

function mix(obj: Array<string>): IRecipeStep_Mix {
    return {
        mix: obj,
        type: "mix",
    };
}

function isChop(obj: IRecipeStep): obj is IRecipeStep_Chop {
    return (obj.type === "chop");
}

function chop(obj: string): IRecipeStep_Chop {
    return {
        chop: obj,
        type: "chop",
    };
}

function isBake(obj: IRecipeStep): obj is IRecipeStep_Bake {
    return (obj.type === "bake");
}

function bake(obj: IBakeStep): IRecipeStep_Bake {
    return {
        bake: obj,
        type: "bake",
    };
}

export type IRecipeStep = IRecipeStep_Mix | IRecipeStep_Chop | IRecipeStep_Bake;

export interface IRecipeStepVisitor<T> {
    'mix': (obj: Array<string>) => T;
    'chop': (obj: string) => T;
    'bake': (obj: IBakeStep) => T;
    'unknown': (obj: IRecipeStep) => T;
}

function visit<T>(obj: IRecipeStep, visitor: IRecipeStepVisitor<T>): T {
    if (isMix(obj)) {
        return visitor.mix(obj.mix);
    }
    if (isChop(obj)) {
        return visitor.chop(obj.chop);
    }
    if (isBake(obj)) {
        return visitor.bake(obj.bake);
    }
    return visitor.unknown(obj);
}

export const IRecipeStep = {
    isMix: isMix,
    mix: mix,
    isChop: isChop,
    chop: chop,
    isBake: isBake,
    bake: bake,
    visit: visit
};
