import React from "react";
import { useSelector } from "react-redux";

import {
    CertificatesContainer,
    CertificatesInfo,
    CertificatesItems,
    CertificatesTitle,
} from "./styled";

import ButtonTeam from "../../Components/Button";
import InputPattern from "../../Components/Input/InputPattern";
import MoreButtonTeam from "../../Components/Button/More";
import IconFinishButton from "../../assets/ButtonIcon/FinishIcon.svg";
import InputCertificates from "../../Components/Input/InputCertificates";
import { regName } from "../../Utils/regex";
import { ICertificatesReducer } from "../../Interfaces/ICertificatesReducer";
import {
    certificatesIGraduation,
    certificatesInstitution,
    certificatesTeamName,
} from "../../Redux/ValidateView/Certificates/index.actions";

const Certificates = () => {
    const { certificates, teamName, institution, graduation } = useSelector(
        (state: ICertificatesReducer) => state.certificatesReducer
    );

    return (
        <CertificatesContainer>
            <CertificatesItems>
                <CertificatesTitle>Cerficates</CertificatesTitle>
                <React.Fragment>
                    {certificates.map((item: any) => (
                        <InputCertificates
                            key={item.id}
                            type="text"
                            placeholder="https://www.linkedin.com/ruan-amaral/"
                            value={
                                certificates.find((e: any) => e.id == item.id)
                                    .value
                            }
                            id={item.id}
                        />
                    ))}
                </React.Fragment>
            </CertificatesItems>
            <MoreButtonTeam />

            <CertificatesInfo>
                <InputPattern
                    type="text"
                    labelName="Team Name *"
                    placeholder="Amendoin Team"
                    modifyState={certificatesTeamName}
                    validate={teamName}
                    value={teamName}
                />
                <InputPattern
                    type="text"
                    labelName="Institution *"
                    placeholder="Universidade do Sul de Santa Catarina"
                    modifyState={certificatesInstitution}
                    validate={regName.test(institution)}
                    value={institution}
                />
                <InputPattern
                    type="text"
                    labelName="Graduation *"
                    placeholder="Ciências da Computação"
                    modifyState={certificatesIGraduation}
                    validate={regName.test(graduation)}
                    value={graduation}
                />
            </CertificatesInfo>
            <ButtonTeam icon={IconFinishButton} nextPage={"FORM"}>
                Finish
            </ButtonTeam>
        </CertificatesContainer>
    );
};

export default Certificates;
