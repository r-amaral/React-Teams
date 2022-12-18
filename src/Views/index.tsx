import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Basic from "./Basic";
import Certificates from "./Certificates";
import Social from "./Social";
import { MainContainer, MainElement } from "./styled";

const View = () => {
    const { pageNavigation } = useSelector((state: any) => state);

    return (
        <MainElement>
            <MainContainer>
                <Header />
                {pageNavigation.page === "BASIC" && <Basic />}
                {pageNavigation.page === "SOCIAL" && <Social />}
                {pageNavigation.page === "CERTIFICATES" && <Certificates />}
            </MainContainer>
        </MainElement>
    );
};

export default View;
