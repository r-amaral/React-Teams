import InputPattern from "../../Components/Input/InputPattern";
import InputContact from "../../Components/Input/InputContact";
import Birthday from "../../Components/Birthday";

import {
    BasicContainer,
    ContactContainer,
    PrivacyTermsCheckBox,
    PrivacyTermsContainer,
    PrivacyTermsLabel,
} from "./styled";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonTeams } from "../../Components/Button/styled";
import {
    validateEmail,
    validateFullName,
    validateBirthday,
    validateTermsPrivacy,
} from "../../Redux/ValidateView/Basic/index.actions";

const Basic = () => {
    const [fullName, setFullName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [validateAge, setValidateAge] = useState<boolean>(false);

    const termsPrivacy = useRef<any>();

    const { basicReducer } = useSelector((state: any) => state);

    const regName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    const dispatch = useDispatch();

    const validateData = () => {
        dispatch(validateFullName(regName.test(fullName)));
        dispatch(validateEmail(regEmail.test(email)));
        dispatch(validateBirthday(validateAge));
        dispatch(validateTermsPrivacy(termsPrivacy.current?.checked));
    };

    return (
        <BasicContainer>
            <InputPattern
                type={"text"}
                labelName={"Full Name *"}
                placeholder={"Foo Bar"}
                setState={setFullName}
                validate={regName.test(fullName)}
            />
            <InputPattern
                type={"text"}
                labelName={"Nickname"}
                placeholder={"Juanito"}
                setState={setNickName}
            />
            <ContactContainer>
                <InputContact
                    type={"text"}
                    labelName={"Email *"}
                    placeholder={"foo@bar.com"}
                    setState={setEmail}
                    validate={regEmail.test(email)}
                />
                <InputContact
                    type={"phone"}
                    labelName={"Phone"}
                    placeholder={"(83) 00000-0000"}
                    setState={setPhone}
                />
            </ContactContainer>
            <Birthday setValidateAge={setValidateAge} />
            <PrivacyTermsContainer>
                <PrivacyTermsCheckBox
                    ref={termsPrivacy}
                    id="privacyterms"
                    type="checkbox"
                />
                <PrivacyTermsLabel htmlFor="privacyterms">
                    I accept the terms and privacy
                </PrivacyTermsLabel>
            </PrivacyTermsContainer>
            <ButtonTeams onClick={validateData}>Next</ButtonTeams>
        </BasicContainer>
    );
};

export default Basic;
