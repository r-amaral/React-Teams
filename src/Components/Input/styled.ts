import styled from 'styled-components';

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
`

export const LabelStyle = styled.label<{ validate: boolean }>`
font-weight: 400;
font-size: 14px;
margin-bottom: 5px;
color: ${({ validate }) => validate ? '#198754' : '#767676'};
`

export const InputStyle = styled.input<{ validate: boolean }>`
font-weight: 400;
font-size: 14px;
line-height: 16px;
width: 100%;
height:40px;
background: #FFFFFF;
border: 2px solid ${({ validate }) => validate ? '#198754' : '#AAAAAA'};
border-radius: 4px;
padding: 0 12px;
box-sizing: border-box;
outline: none;
`