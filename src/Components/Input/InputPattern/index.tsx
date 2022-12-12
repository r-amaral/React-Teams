import { IInput } from "../../../Interfaces/IInput";
import { InputContainer, LabelStyle, InputStyle } from "../styled";

const InputPattern = ({
    type,
    labelName,
    placeholder,
    setState,
    validate,
}: IInput) => {
    return (
        <InputContainer>
            <LabelStyle validate={validate} htmlFor={labelName}>
                {labelName}
            </LabelStyle>
            <InputStyle
                validate={validate}
                id={labelName}
                type={type}
                placeholder={placeholder}
                onChange={({ target }) => setState(target.value)}
            />
        </InputContainer>
    );
};

export default InputPattern;
