export interface IInput {
    type: string;
    labelName?: string;
    placeholder: string;
    validate?: any;
    setState: React.Dispatch<React.SetStateAction<string>>;
}