import { font } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SponsorsWidgetWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const SponsorWidget = styled('div')`
display: flex;
justify-content: space-between;
`;
export const SponsorWidgetLogo = styled('img')`
height: 20px;
`;

export const SponsorWidgetQuantity = styled('div')`
display: flex;
gap: 5px;
`;

export const SponsorWidgetQuantityCount= styled('p')`
margin: auto 0;
font-size: ${font.sizes.main};
font-weight: ${font.weights.semiBold};
`;

export const SponsorWidgetQuantityImg = styled('img')`
height: 20px;
width: 20px;
`;
