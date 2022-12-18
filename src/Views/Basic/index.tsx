import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputPattern from "../../Components/Input/InputPattern";
import InputContact from "../../Components/Input/InputContact";
import Birthday from "../../Components/Birthday";

import { ButtonTeams } from "../../Components/Button/styled";
import { currentPage } from "../../Redux/ValidateView/Navigate/index.actions";
import { regEmail, regName } from "../../Utils/regex";

import {
    BasicContainer,
    ContactContainer,
    PrivacyTermsCheckBox,
    PrivacyTermsContainer,
    PrivacyTermsLabel,
} from "./styled";

import {
    basicEmail,
    basicFullName,
    basicNickName,
    basicPhone,
    basicTermsVerify,
} from "../../Redux/ValidateView/Basic/index.actions";

const Basic = () => {
    const [validateAge, setValidateAge] = useState<boolean>(false);

    const termsPrivacy = useRef<HTMLInputElement>(null);

    const { fullName, nickName, email, phone } = useSelector(
        (state: any) => state.basicReducer
    );

    const dispatch = useDispatch();

    const validateBasicData = () => {
        const basicState = {
            fullName: regName.test(fullName),
            email: regEmail.test(email),
            birthday: validateAge,
            termsPrivacy: termsPrivacy.current!.checked,
        };

        if (Object.values(basicState).every((attr: any) => attr === true))
            return nextPage();
    };

    const nextPage = () => {
        dispatch(currentPage("SOCIAL"));
    };

    return (
        <BasicContainer>
            <InputPattern
                type={"text"}
                labelName={"Full Name *"}
                placeholder={"Foo Bar"}
                modifyState={basicFullName}
                validate={regName.test(fullName)}
                value={fullName}
            />
            <InputPattern
                type={"text"}
                labelName={"Nickname"}
                placeholder={"Juanito"}
                modifyState={basicNickName}
                value={nickName}
            />
            <ContactContainer>
                <InputContact
                    type={"text"}
                    labelName={"Email *"}
                    placeholder={"foo@bar.com"}
                    modifyState={basicEmail}
                    validate={regEmail.test(email)}
                    value={email}
                />
                <InputContact
                    type={"phone"}
                    labelName={"Phone"}
                    placeholder={"(83) 00000-0000"}
                    modifyState={basicPhone}
                    value={phone}
                />
            </ContactContainer>
            <Birthday setValidateAge={setValidateAge} />
            <PrivacyTermsContainer>
                <PrivacyTermsCheckBox
                    ref={termsPrivacy}
                    id="privacyterms"
                    type="checkbox"
                    onChange={({ target }) =>
                        dispatch(basicTermsVerify(target.value))
                    }
                />
                <PrivacyTermsLabel htmlFor="privacyterms">
                    I accept the terms and privacy
                </PrivacyTermsLabel>
            </PrivacyTermsContainer>
            <ButtonTeams onClick={validateBasicData}>Next</ButtonTeams>
        </BasicContainer>
    );
};

export default Basic;
