import styled from "styled-components";
import { border, colors, font, transition } from "./styleConstants";

export const Container = styled('div')`
margin: 0 auto;
max-width: 1140px;
padding-inline: 20px;
`;

export const DefaultFormItem = styled('div')`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const DefaultLabel = styled('label') <{ margin?: string }>`
margin: ${props => props.margin || "0 0 0 5px"};
`;

export const DefaultInput = styled('input') <{ width?: string }>`
padding: 5px;
width: ${props => props.width};
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

export const DefaultTextarea = styled('textarea') <{ width?: string, height?: string }>`
width: ${props => props.width};
height: ${props => props.height};
padding: 5px;
font-size: ${font.sizes.small};
color: ${colors.accent};
border: ${border.styles.textareaDefaukt};
border-radius: ${border.radius.medium};
transition: ${transition.fast};

&:hover, &:focus {
    border: ${border.styles.inputFocus};
}
`;