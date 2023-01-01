import { ButtonTeams, IconButton } from "./styled";

import { IButton } from "../../Interfaces/IButton";
import { validatePageData } from "../../Utils/validatePageData";

const ButtonTeam = ({ icon, children, nextPage }: IButton) => {
    return (
        <ButtonTeams onClick={() => validatePageData(nextPage)}>
            {children}
            <IconButton icon={icon} />
        </ButtonTeams>
    );
};

export default ButtonTeam;
