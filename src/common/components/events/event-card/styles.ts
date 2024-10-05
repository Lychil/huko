import styled from "styled-components";
import { border, colors, font, shadow, transition } from "@/common/styles/styleConstants";
import { glass, smoothlyAnim } from "@/common/styles/mixins";

export const EventCardWrapper = styled('div') <{ image: string }>`
cursor: pointer;
position: relative;
width: 300px;
height: 300px;
display: grid;
grid-template-rows: auto 1fr;
border-radius: ${border.radius.medium};
background-image: url(${props => props.image}), linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0,0,0,0) 80%);
background-size: cover;
-webkit-box-shadow: ${shadow.default};
-moz-box-shadow: ${shadow.default};
box-shadow: ${shadow.default};
transition: ${transition.fast};

&:hover {
    margin-top: -5px;
}
`;

export const EventCardFront = styled('div')`
position: relative;
border-radius: inherit;
display: flex;
padding: 20px;
height: inherit;
background-image: linear-gradient(0deg, rgba(30, 30, 30, 1) 0%, rgba(0,0,0,0) 100%);
animation: ${smoothlyAnim} 1.5s forwards;
`;

export const EventCardDayWrapper = styled('div')`
position: absolute;
padding: 5px;
text-align: center;
color: ${colors.whiteTotal};
top: 20px;
left: 20px;
border-radius: ${border.radius.extraSmall};
${glass}
`;

export const EventCardDayNumber = styled('p')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.bold};
`;

export const EventCardDayMonth = styled('p')`
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.bold};
`;


export const EventCardInfoWrapper = styled('div')`
margin-top: auto;
width: 100%;
`;

export const EventCardInfoTitle = styled('div')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.medium};
color: ${colors.whiteTotal};
margin-bottom: 15px;
`;

export const EventCardBack = styled('div')`
height: inherit;
padding: 20px;
border-radius: inherit;
background-color: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(2px);
color: ${colors.whiteTotal};
animation: ${smoothlyAnim} 1s forwards;
`;

export const EventCardDescTitle = styled('p')`
font-size: ${font.sizes.main};
font-weight: ${font.weights.semiBold};
margin-bottom: 10px;
`;

export const EventCardDescText = styled('p')`
font-size: ${font.sizes.small};
font-weight: ${font.weights.medium};
`;