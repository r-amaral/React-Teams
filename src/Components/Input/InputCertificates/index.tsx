import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconHeart, InputCertificatesContainer } from "./styled";

import { InputStyle } from "../styled";

import { IInput } from "../../../Interfaces/IInput";
import { ICertificatesReducer } from "../../../Interfaces/ICertificatesReducer";
import {
    certificatesFavorite,
    certificatesValue,
} from "../../../Redux/ValidateView/Certificates/index.actions";

const InputCertificates = ({
    type,
    placeholder,
    validate,
    value,
    id,
}: IInput) => {
    const { certificates } = useSelector(
        (state: ICertificatesReducer) => state.certificatesReducer
    );
    const dispatch = useDispatch();

    const thisCertificate = certificates.find(
        (attr: { id: number | undefined }) => attr.id === id
    );

    return (
        <React.Fragment>
            <InputCertificatesContainer>
                <InputStyle
                    validate={validate}
                    type={type}
                    placeholder={placeholder}
                    onChange={({ target }) =>
                        dispatch(
                            certificatesValue({
                                value: target.value,
                                id: id,
                            })
                        )
                    }
                    value={value}
                />
                <IconHeart
                    icon={thisCertificate.isFavorite}
                    onClick={() =>
                        dispatch(
                            certificatesFavorite({
                                isFavorite: !thisCertificate.isFavorite,
                                id: id,
                            })
                        )
                    }
                />
            </InputCertificatesContainer>
        </React.Fragment>
    );
};

export default InputCertificates;
