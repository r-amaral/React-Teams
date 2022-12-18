import { useDispatch, useSelector } from "react-redux";
import { currentPage } from "../../Redux/ValidateView/Navigate/index.actions";
import { HeaderButton, HeaderContainer, TitleView } from "./styled";

const Header = () => {
    const dispatch = useDispatch();
    const { pageNavigation } = useSelector((state: any) => state);

    return (
        <HeaderContainer>
            <TitleView>Team Sign Up</TitleView>
            <HeaderButton
                currentPage={pageNavigation.page}
                active={"BASIC"}
                onClick={() => dispatch(currentPage("BASIC"))}
            >
                Basic
            </HeaderButton>
            <HeaderButton currentPage={pageNavigation.page} active={"SOCIAL"}>
                Social
            </HeaderButton>
            <HeaderButton
                currentPage={pageNavigation.page}
                active={"CERTIFICATES"}
            >
                Certificates
            </HeaderButton>
        </HeaderContainer>
    );
};

export default Header;
