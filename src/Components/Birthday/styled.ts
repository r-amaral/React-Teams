import styled from "styled-components";

export const BirthDayContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 22px;

@media screen and (max-width:768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
}
`

export const BirthDayTitle = styled.h2`
width: 100%;
font-weight: 400;
font-size: 18px;
color: #767676;

@media screen and (max-width:768px){
    grid-column: span 2;
}
`

export const BirthDayAgeContainer = styled.div`
width: 20%;

@media screen and (max-width:768px){
    width: 100%;
}
`

export const BirthDayName = styled.span`
font-weight: 400;
font-size: 14px;
color: #767676;
margin-bottom: 5px;
`

export const BirthDayAge = styled.div`
margin-top: 5px;
height: 36px;
background: #FFFFFF;
border: 2px solid #AAAAAA;
border-radius: 4px;
display: flex;
flex-direction: column;
padding-left: 15px;
justify-content: center;
color: #767676;
`

