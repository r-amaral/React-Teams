import { useDispatch, useSelector } from "react-redux";

import {
    CertificatesContainer,
    CertificatesInfo,
    CertificatesItems,
    CertificatesTitle,
} from "./styled";

import InputPattern from "../../Components/Input/InputPattern";
import InputCertificates from "../../Components/Input/InputCertificates";
import { ButtonTeams } from "../../Components/Button/styled";
import { regName } from "../../Utils/regex";
import {
    certificatesCertificatesUser,
    certificatesIGraduation,
    certificatesInstitution,
    certificatesTeamName,
} from "../../Redux/ValidateView/Certificates/index.actions";

const Certificates = () => {
    const dispatch = useDispatch();
    const { certificates, teamName, institution, graduation } = useSelector(
        (state: any) => state.certificatesReducer
    );
    return (
        <CertificatesContainer>
            <CertificatesItems>
                <CertificatesTitle>Cerficates</CertificatesTitle>
                <InputCertificates
                    type="text"
                    placeholder="https://www.linkedin.com/ruan-amaral/"
                    validate={false}
                    modifyState={certificatesCertificatesUser}
                    value={certificates}
                />
            </CertificatesItems>
            <ButtonTeams>More</ButtonTeams>

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
            <ButtonTeams>Finish</ButtonTeams>
        </CertificatesContainer>
    );
};

export default Certificates;
