import { IconHeart, InputCertificatesContainer } from "./styled";
import { IInput } from "../../../Interfaces/IInput";
import { InputStyle } from "../styled";
import { useDispatch } from "react-redux";
import { useState } from "react";

const InputCertificates = ({
    type,
    placeholder,
    modifyState,
    validate,
    value,
}: IInput) => {
    const dispatch = useDispatch();
    const [icon, setIcon] = useState<boolean>(true);
    return (
        <InputCertificatesContainer>
            <InputStyle
                validate={validate}
                type={type}
                placeholder={placeholder}
                onChange={({ target }) => dispatch(modifyState(target.value))}
                value={value}
            />
            <IconHeart icon={icon} onClick={() => setIcon(!icon)} />
        </InputCertificatesContainer>
    );
};

export default InputCertificates;
