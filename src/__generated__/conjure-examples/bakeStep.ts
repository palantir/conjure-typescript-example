import { ITemperature } from "./temperature";

export interface IBakeStep {
    temperature: ITemperature;
    durationInSeconds: number;
}
