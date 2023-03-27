import { useDispatch, useSelector } from "react-redux";

import { MoreIcon } from "./styled";

import { ButtonTeams } from "../styled";

import plusIcon from "../../../assets/ButtonIcon/PlusIcon.svg";
import IconNextButton from "../../../assets/ButtonIcon/NextWhite.svg";
import { ICertificatesReducer } from "../../../Interfaces/ICertificatesReducer";
import { certificatesCertificatesUser } from "../../../Redux/ValidateView/Certificates/index.actions";

const MoreButtonTeam = () => {
    const { certificates } = useSelector(
        (state: ICertificatesReducer) => state.certificatesReducer
    );

    const dispatch = useDispatch();

    return (
        <ButtonTeams
            onClick={() =>
                certificates.length < 5 &&
                dispatch(
                    certificatesCertificatesUser({
                        value: "",
                        id: certificates.length
                            ? Math.max(
                                  ...certificates.map(
                                      (a: { id: number }) => a.id
                                  )
                              ) + 1
                            : 0,
                        isFavorite: false,
                    })
                )
            }
        >
            <MoreIcon icon={plusIcon} />
            More
            <MoreIcon icon={IconNextButton} />
        </ButtonTeams>
    );
};

export default MoreButtonTeam;
