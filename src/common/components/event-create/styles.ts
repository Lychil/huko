import { border, colors, font, transition } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const EventCreateWrapper = styled('div')`
max-width: 700px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 30px;
`;

// ----------------------input img----------------------
export const EventCreateImgWrapper = styled('div')`
background-color: ${colors.placeholder};
height: 300px;
`;

export const EventCreateImg = styled('img')``;
// ------------------------------------------------------

export const EventCreateSection = styled('div')`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const EventCreateSectionTitle = styled('p')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.semiBold};
margin-bottom: 10px;
`;

// ----------------------input item-----------------------
export const EventCreateInputWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const EventCreateLabel = styled('label')`
margin-bottom: 5px;
margin-left: 5px;
`;

export const EventCreateInput = styled('input')<{$width: string}>`
padding: 5px;
width: ${props => props.$width};
font-size: ${font.sizes.small};
color: ${colors.accent};
border: ${border.styles.whiteSmall};
border-bottom: ${border.styles.input};
transition: ${transition.fast};

&:hover, &:focus {
    border-radius: ${border.radius.medium};
    border: ${border.styles.inputFocus};
}
`;

export const EventCreateTextarea = styled('textarea')`
padding: 5px;
height: 300px;
font-size: ${font.sizes.small};
color: ${colors.accent};
border: ${border.styles.textareaDefaukt};
border-radius: ${border.radius.medium};
transition: ${transition.fast};

&:hover, &:focus {
    border: ${border.styles.inputFocus};
}
`;
// -------------------------------------------------------



