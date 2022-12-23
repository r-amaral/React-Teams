import { validatePageData } from "../../Utils/validatePageData";
import { ButtonTeams, IconButton } from "./styled";

const ButtonTeam = ({ icon, children, nextPage }: any) => {
    return (
        <ButtonTeams onClick={() => validatePageData(nextPage)}>
            {children}
            <IconButton icon={icon} />
        </ButtonTeams>
    );
};

export default ButtonTeam;
