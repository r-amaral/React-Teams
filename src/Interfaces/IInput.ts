export interface IInput {
    type: string;
    labelName?: string;
    placeholder: string;
    validate?: any;
    value: string | number;
    modifyState: any;
}