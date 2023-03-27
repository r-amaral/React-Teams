import styled from "styled-components";

import Heart from '../../../assets/ButtonIcon/Heart.svg';
import BlueHeart from '../../../assets/ButtonIcon/BlueHeart.png';
import trashCan from "../../../assets/ButtonIcon/lixeira.png";

export const InputCertificatesContainer = styled.div`
position: relative;

input{
    padding-right: 58px;
}
`

export const IconHeart = styled.i<{ icon: boolean }>`
    background: url(${({ icon }) => icon ? BlueHeart : Heart}) no-repeat;
    height: 16px;
    width: 18px;
    position: absolute;
    top: 12px;
    right: 13px;
    cursor: pointer;
`

export const Icon = styled.i<{ icon?: boolean }>`
    background: url(${trashCan}) no-repeat;
    height: 16px;
    width: 18px;
    position: absolute;
    top: 12px;
    cursor: pointer;
    right: 35px;
`