import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-bottom: 35px;
`

export const TitleView = styled.h1`
grid-row: 1;
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #111111;
margin-bottom: 33px;
`

export const HeaderButton = styled.button`
grid-row: 2;
background: #FFFFFF;
font-weight: 400;
box-shadow: inset 0px -3px 0px #AAAAAA;;
font-size: 16px;
height: 44px;
border: none;
cursor: pointer;
`