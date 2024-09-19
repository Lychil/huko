import { colors } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const HomeWrapper = styled('main')`
min-height: 100%;
background-color: ${colors.main};
flex-grow: 1;
`;

export const HomeContent = styled('div')`
padding: 20px 0;
display: grid;
grid-template-columns: 1fr 300px;
gap: 20px;
`;

export const HomeList = styled('section')`
flex-grow: 1;
`;

export const HomeWidjets = styled('section')`
display: flex;
flex-direction: column;
gap: 20px;
`