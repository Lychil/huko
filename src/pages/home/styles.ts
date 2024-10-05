import styled from "styled-components";

export const HomeWrapper = styled('main')`
min-height: 100%;
flex-grow: 1;
`;

export const HomeContent = styled('div')`
padding: 20px 0;
display: grid;
grid-template-columns: 1fr auto;
`;

export const HomeList = styled('section')`
flex-grow: 1;
`;

export const HomeWidjets = styled('section')`
display: flex;
flex-direction: column;
gap: 20px;
`