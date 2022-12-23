import { useSelector } from "react-redux";
import { SocialContainer, SocialInputs } from "./styled";

import InputPattern from "../../Components/Input/InputPattern";
import ButtonTeam from "../../Components/Button";
import IconNextButton from "../../assets/ButtonIcon/NextWhite.svg";
import { regexUrl } from "../../Utils/regex";
import { ISocialReducer } from "../../Interfaces/ISocialReducer";

import {
    socialGithub,
    socialLinkedin,
} from "../../Redux/ValidateView/Social/index.actions";

const Social = () => {
    const { linkedin, github } = useSelector(
        (state: ISocialReducer) => state.socialReducer
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
            <ButtonTeam icon={IconNextButton} nextPage={"CERTIFICATES"}>
                Next
            </ButtonTeam>
        </SocialContainer>
    );
};

export default Social;
