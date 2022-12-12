import { HeaderButton, HeaderContainer, TitleView } from "./styled";

const Header = () => {
    return (
        <HeaderContainer>
            <TitleView>Team Sign Up</TitleView>
            <HeaderButton>Basic</HeaderButton>
            <HeaderButton>Social</HeaderButton>
            <HeaderButton>Certificates</HeaderButton>
        </HeaderContainer>
    );
};

export default Header;
