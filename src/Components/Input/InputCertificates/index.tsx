import { IInput } from "../../../Interfaces/IInput";
import { InputStyle } from "../styled";

const InputCertificates = ({
    type,
    placeholder,
    modifyState,
    validate,
    value,
}: IInput) => {
    return (
        <InputStyle
            validate={validate}
            type={type}
            placeholder={placeholder}
            onChange={({ target }) => modifyState(target.value)}
            value={value}
        />
    );
};

export default InputCertificates;
