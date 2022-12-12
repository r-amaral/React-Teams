import Header from "../Components/Header";
import Basic from "./Basic";
import Certificates from "./Certificates";
import Social from "./Social";
import { MainContainer, MainElement } from "./styled";

const View = () => {
    return (
        <MainElement>
            <MainContainer>
                <Header />
                <Basic />
                {/* <Social /> */}
                {/* <Certificates /> */}
            </MainContainer>
        </MainElement>
    );
};

export default View;
