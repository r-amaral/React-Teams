import { useDispatch, useSelector } from "react-redux";

import { HeaderButton, HeaderContainer, TitleView } from "./styled";

import { currentPage } from "../../Redux/Navigate/index.actions";
import { validatePageData } from "../../Utils/validatePageData";
import { IPageNavigation } from "../../Interfaces/IPageNavigation";

const Header = () => {
    const dispatch = useDispatch();

    const { pageNavigation } = useSelector((state: IPageNavigation) => state);

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
            <HeaderButton
                currentPage={pageNavigation.page}
                active={"SOCIAL"}
                onClick={() => validatePageData("SOCIAL")}
            >
                Social
            </HeaderButton>
            <HeaderButton
                currentPage={pageNavigation.page}
                active={"CERTIFICATES"}
                onClick={() => validatePageData("CERTIFICATES")}
            >
                Certificates
            </HeaderButton>
        </HeaderContainer>
    );
};

export default Header;
