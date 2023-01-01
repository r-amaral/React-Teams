import { useDispatch } from "react-redux";

import { InputContainer, LabelStyle, InputStyle } from "../styled";

import { IInput } from "../../../Interfaces/IInput";

const InputPattern = ({
    type,
    labelName,
    placeholder,
    modifyState,
    validate,
    value,
}: IInput) => {
    const dispatch = useDispatch();
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
                onChange={({ target }) => dispatch(modifyState(target.value))}
                value={value}
            />
        </InputContainer>
    );
};

export default InputPattern;
