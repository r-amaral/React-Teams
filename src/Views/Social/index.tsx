import { useSelector } from "react-redux";
import { SocialContainer, SocialInputs } from "./styled";

import InputPattern from "../../Components/Input/InputPattern";
import { regexUrl } from "../../Utils/regex";
import { ButtonTeams } from "../../Components/Button/styled";
import { validatePageData } from "../../Utils/validatePageData";

import {
    socialGithub,
    socialLinkedin,
} from "../../Redux/ValidateView/Social/index.actions";

const Social = () => {
    const { linkedin, github } = useSelector(
        (state: any) => state.socialReducer
    );

    return (
        <SocialContainer>
            <SocialInputs>
                <InputPattern
                    type="text"
                    labelName="Linkedin"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104"
                    modifyState={socialLinkedin}
                    validate={false}
                    value={linkedin}
                />
                <InputPattern
                    type="text"
                    labelName="GitHub *"
                    placeholder="https://github.com/foobar"
                    modifyState={socialGithub}
                    validate={regexUrl.test(github)}
                    value={github}
                />
            </SocialInputs>
            <ButtonTeams onClick={() => validatePageData("CERTIFICATES")}>
                Next
            </ButtonTeams>
        </SocialContainer>
    );
};

export default Social;
