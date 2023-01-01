import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

import { InputContactContainer } from "./styled";

import { InputStyle, LabelStyle } from "../styled";

import { IInput } from "../../../Interfaces/IInput";

const InputContact = ({
    type,
    labelName,
    placeholder,
    modifyState,
    validate,
    value,
}: IInput) => {
    const dispatch = useDispatch();

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
                    onChange={({ target }) =>
                        dispatch(modifyState(target.value))
                    }
                    value={value}
                />
            ) : (
                <InputStyle
                    validate={validate}
                    id={labelName}
                    type={type}
                    placeholder={placeholder}
                    onChange={({ target }) =>
                        dispatch(modifyState(target.value))
                    }
                    value={value}
                />
            )}
        </InputContactContainer>
    );
};

export default InputContact;
