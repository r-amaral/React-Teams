import styled from "styled-components";

export const MoreIcon = styled.i<{ icon: string }>`
background: url(${({ icon }) => icon}) no-repeat;
background-position: center left;
height: 100%;
width: 16px;
`