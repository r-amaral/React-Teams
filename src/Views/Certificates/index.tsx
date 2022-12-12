import { ButtonTeams } from "../../Components/Button/styled";
import InputCertificates from "../../Components/Input/InputCertificates";
import InputPattern from "../../Components/Input/InputPattern";
import {
    CertificatesContainer,
    CertificatesInfo,
    CertificatesItems,
    CertificatesTitle,
} from "./styled";

const Certificates = () => {
    return (
        <CertificatesContainer>
            <CertificatesItems>
                <CertificatesTitle>Cerficates</CertificatesTitle>
                {/* <InputCertificates
                    type={"text"}
                    placeholder={"https://www.linkedin.com/ruan-amaral/"}
                    validate={false}
                /> */}
            </CertificatesItems>
            <ButtonTeams>More</ButtonTeams>

            <CertificatesInfo>
                {/* <InputPattern
                    type={"text"}
                    labelName={"Team Name *"}
                    placeholder={"https://www.linkedin.com/ruan-amaral/"}
                    validate={true}
                />
                <InputPattern
                    type={"text"}
                    labelName={"Institution *"}
                    placeholder={"Universidade do Sul de Santa Catarina"}
                    validate={true}
                />
                <InputPattern
                    type={"text"}
                    labelName={"Graduation *"}
                    placeholder={"Ciências da Computação"}
                    validate={true}
                /> */}
            </CertificatesInfo>
            <ButtonTeams>Finish</ButtonTeams>
        </CertificatesContainer>
    );
};

export default Certificates;
