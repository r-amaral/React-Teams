import { useSelector } from "react-redux";

import Basic from "./Basic";
import Social from "./Social";
import Certificates from "./Certificates";
import { MainContainer, MainElement } from "./styled";

import Header from "../Components/Header";
import { IPage } from "../Interfaces/IPage";

const View = () => {
    const { page } = useSelector((state: IPage) => state.pageNavigation);

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
