import styled from "styled-components";
import { border, colors, font, shadow } from "@/common/styles/styleConstants";

export const EventCardWrapper = styled('div')`
width: 250px;
height: 350px;
overflow: hidden;
display: grid;
grid-template-rows: auto 1fr;
background-color: ${colors.whiteTotal};
-webkit-box-shadow: ${shadow.default};
-moz-box-shadow: ${shadow.default};
box-shadow: ${shadow.default};
`;

export const EventCardHeaderWrapper = styled('div')`
position: relative;
height: 150px;
background-color: ${colors.placeholder};
`;

export const EventCardHeaderImg = styled('img')`
width: 100%;
height: 100%;
background-size: cover;
`;

export const EventCardLocation = styled('div')`
cursor: pointer;
position: absolute;
top: 5px;
left: 5px;
padding: 5px;
max-width: 50%;
overflow: hidden;
font-size: ${font.sizes.extraSmall};
white-space: nowrap;
text-overflow: ellipsis;
border-radius: ${border.radius.medium};
background-color: ${colors.overlay};
`;

export const EventCardClock = styled('div')`
position: absolute;
bottom: 5px;
left: 5px;
padding: 5px;
display: flex;
gap: 5px;
border-radius: ${border.radius.medium};
background-color: ${colors.overlay};
`;

export const EventCardClockText = styled('p')`
margin: auto 0;
font-size: ${font.sizes.extraSmall};
`;

export const EventCardClockImg = styled('img')`
width: 20px;
height: 20px;
`;

export const EventCardFavouriteBtn = styled('button')`
position: absolute;
top: 5px;
right: 5px;
padding: 5px;
display: flex;
border-radius: ${border.radius.circle};
background-color: ${colors.overlay};
`;

export const EventCardFavouriteImg = styled('img')`
margin: auto 0;
height: 20px;
width: 20px;
`;

export const EventCardContent = styled('div')`
cursor: pointer;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
`;

export const EventCardTitle = styled('p')`
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
font-size: ${font.sizes.title};
font-weight: ${font.weights.semiBold};
`;

export const EventCardDesc = styled('p')`
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 4;
line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
color: ${colors.accent};
font-size: ${font.sizes.main};
font-weight: ${font.weights.medium};
`;

export const EventCardIndicatorsWrapper = styled('div')`
display: flex;
gap: 5px;
`;

export const EventCardIndicator = styled('div')`
display: flex;
gap: 2px;
padding: 4px;
border-radius: ${border.radius.extraSmall};
background-color: ${colors.placeholder};
`;

export const EventCardIndicatorText = styled('p')`
margin: auto 0;
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.medium};
`;

export const EventCardIndicatorImg = styled('img')`
height: 20px;
width: 20px;
`;