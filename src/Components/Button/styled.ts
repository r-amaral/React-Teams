import styled from "styled-components";

export const ButtonTeams = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-self: flex-end;
height: 40px;
color: white;
font-weight: 400;
font-size: 16px;
padding: 0px 12px;
gap: 6px;
background: #074EE8;
border-radius: 4px;
border: none;
outline: none;
cursor: pointer;
gap: 13px;
`

export const IconButton = styled.i<{ icon: any }>`
background: url(${({ icon }) => icon}) no-repeat;
background-position: center left;
height: 100%;
width: 16px;
order: ${({ icon }) => icon === '/src/assets/ButtonIcon/NextWhite.svg' ? 0 : -1};
`
