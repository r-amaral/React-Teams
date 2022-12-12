import { ButtonTeams } from "../../Components/Button/styled";
import InputPattern from "../../Components/Input/InputPattern";
import { SocialContainer, SocialInputs } from "./styled";

const Social = () => {
    return (
        <SocialContainer>
            <SocialInputs>
                {/* <InputPattern
                    type={"text"}
                    labelName={"Linkedin"}
                    placeholder={
                        "https://www.linkedin.com/in/foo-bar-3a0560104"
                    }
                /> */}
                {/* <InputPattern
                    type={"text"}
                    labelName={"GitHub *"}
                    placeholder={"https://github.com/foobar"}
                /> */}
            </SocialInputs>
            <ButtonTeams>Next</ButtonTeams>
        </SocialContainer>
    );
};

export default Social;
