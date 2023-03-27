import styled from 'styled-components'

export const SelectContainer = styled.div`
display: flex;
flex-direction: column;
width:23%;

@media screen and (max-width:768px){
    width: 100%;
}
`

export const SelectStyle = styled.select<{ states: number | string | undefined }>`
width: 100%;
outline: none;
height: 40px;
background: #FFFFFF;
border: 2px solid ${({ states }) => states ? '#198754' : '#AAAAAA'};
border-radius: 4px;
padding: 0 15px;
font-size: 16px;
color: #767676;
cursor: pointer;
`

export const SelectName = styled.span<{ states: number | string | undefined }>`
font-weight: 400;
font-size: 14px;
color: ${({ states }) => states ? '#198754' : '#767676'};;
margin-bottom: 5px;
`

export const OptionBirthday = styled.option`
display: flex;
justify-content: center;
align-items: center;
`