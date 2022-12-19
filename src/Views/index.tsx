import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Basic from "./Basic";
import Certificates from "./Certificates";
import Social from "./Social";
import { MainContainer, MainElement } from "./styled";

const View = () => {
    const { page } = useSelector((state: any) => state.pageNavigation);

    return (
        <MainElement>
            <MainContainer>
                <Header />
                {page === "BASIC" && <Basic />}
                {page === "SOCIAL" && <Social />}
                {page === "CERTIFICATES" && <Certificates />}
            </MainContainer>
        </MainElement>
    );
};

export default View;
