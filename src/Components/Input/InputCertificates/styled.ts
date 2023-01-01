import styled from "styled-components";

import Heart from '../../../assets/ButtonIcon/Heart.svg';
import BlueHeart from '../../../assets/ButtonIcon/BlueHeart.png';

export const InputCertificatesContainer = styled.div`
position: relative;
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