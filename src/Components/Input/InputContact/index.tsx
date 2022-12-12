import { InputStyle, LabelStyle } from "../styled";
import { InputContactContainer } from "./styled";
import InputMask from "react-input-mask";
import { IInput } from "../../../Interfaces/IInput";

const InputContact = ({
    type,
    labelName,
    placeholder,
    setState,
    validate,
}: IInput) => {
    return (
        <InputContactContainer type={type}>
            <LabelStyle validate={validate} htmlFor={labelName}>
                {labelName}
            </LabelStyle>
            {type === "phone" ? (
                <InputStyle
                    as={InputMask}
                    mask="(99) 99999-9999"
                    id={labelName}
                    type={type}
                    placeholder={placeholder}
                    validate={validate}
                    onChange={({ target }) => setState(target.value)}
                />
            ) : (
                <InputStyle
                    validate={validate}
                    id={labelName}
                    type={type}
                    placeholder={placeholder}
                    onChange={({ target }) => setState(target.value)}
                />
            )}
        </InputContactContainer>
    );
};

export default InputContact;
