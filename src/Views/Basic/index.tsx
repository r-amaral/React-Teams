import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Birthday from "../../Components/Birthday";
import ButtonTeam from "../../Components/Button";
import IconNextButton from "../../assets/ButtonIcon/NextWhite.svg";
import InputPattern from "../../Components/Input/InputPattern";
import InputContact from "../../Components/Input/InputContact";
import { IBasicReducer } from "../../Interfaces/IBasicReducer";
import { regEmail, regName } from "../../Utils/regex";
import {
    basicEmail,
    basicFullName,
    basicNickName,
    basicPhone,
    basicTermsVerify,
} from "../../Redux/ValidateView/Basic/index.actions";

import {
    BasicContainer,
    ContactContainer,
    PrivacyTermsCheckBox,
    PrivacyTermsContainer,
    PrivacyTermsLabel,
} from "./styled";

const Basic = () => {
    const termsPrivacy = useRef<HTMLInputElement>(null);

    const { fullName, nickName, email, phone, termsVerify } = useSelector(
        (state: IBasicReducer) => state.basicReducer
    );

    const dispatch = useDispatch();

    return (
        <BasicContainer>
            <InputPattern
                type="text"
                labelName="Full Name *"
                placeholder="Ruan Oliveira"
                modifyState={basicFullName}
                validate={regName.test(fullName)}
                value={fullName}
            />
            <InputPattern
                type="text"
                labelName="Nickname"
                placeholder="Ruanzin"
                modifyState={basicNickName}
                value={nickName}
            />
            <ContactContainer>
                <InputContact
                    type="text"
                    labelName="Email *"
                    placeholder="ruan@gmail.com"
                    modifyState={basicEmail}
                    validate={regEmail.test(email)}
                    value={email}
                />
                <InputContact
                    type="phone"
                    labelName="Phone"
                    placeholder="(83) 00000-0000"
                    modifyState={basicPhone}
                    value={phone}
                />
            </ContactContainer>
            <Birthday />
            <PrivacyTermsContainer>
                <PrivacyTermsCheckBox
                    ref={termsPrivacy}
                    id="privacyterms"
                    type="checkbox"
                    checked={termsVerify}
                    onChange={({ target }) =>
                        dispatch(basicTermsVerify(target.checked))
                    }
                />
                <PrivacyTermsLabel htmlFor="privacyterms">
                    I accept the terms and privacy
                </PrivacyTermsLabel>
            </PrivacyTermsContainer>
            <ButtonTeam icon={IconNextButton} nextPage={"SOCIAL"}>
                Next
            </ButtonTeam>
        </BasicContainer>
    );
};

export default Basic;
