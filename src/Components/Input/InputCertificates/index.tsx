import { IInput } from "../../../Interfaces/IInput";
import { InputStyle } from "../styled";

const InputCertificates = ({
    type,
    placeholder,
    setState,
    validate,
}: IInput) => {
    return (
        <InputStyle
            validate={validate}
            type={type}
            placeholder={placeholder}
            onChange={({ target }) => setState(target.value)}
        />
    );
};

export default InputCertificates;
