import styled from "styled-components";

import { InputContainer } from "../styled";

export const InputContactContainer = styled(InputContainer) <{ type: string }>`
width: ${({ type }) => type == 'phone' ? '35%' : '65%'};

@media screen and (max-width:768px){
    width: 100%;
    flex-wrap: wrap;
}
`