import styled from "styled-components";
import { border, colors, font, transition } from "../styleConstants";

export const Input = styled('input') <{ color?: "black" | "white" }>`
padding: 5px;
width: 100%;
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.medium};
color: ${props => props.color === 'white' ? colors.whiteTotal : colors.blackTotal};
border: ${border.styles.transparent};
border-bottom: ${props => props.color === 'white' ? border.styles.whiteSmall : border.styles.input};
transition: ${transition.fast};
background-color: ${colors.transparent};

&::placeholder {
    color: inherit;
}

&:hover, &:focus {
    border-radius: ${border.radius.medium};
    border: ${border.styles.inputFocus};
}
`;

export const Label = styled('label')<{margin?: string, color?: "black" | "white"}>`
margin: ${props => props.margin || "0 0 0 5px"};
color: ${props => props.color === 'white' ? colors.whiteTotal : colors.blackTotal};
font-size: ${font.sizes.small};
font-weight: ${font.weights.medium};
`;

export const Button = styled('button')<{width?: string, padding?: string, color?: "white" | "black" }>`
font-size: ${font.sizes.small};
width: ${props => props.width};
font-weight: ${font.weights.medium};
color: ${props => props.color === 'white' ? colors.whiteTotal : colors.blackTotal};
padding: ${props => props.padding ? props.padding : "10px"};
background-color: ${colors.transparent};
transition: ${transition.fast};

&:hover {
    background-color: ${colors.whiteTotal};
    border-radius: ${border.radius.medium};
    color: ${props => props.color === 'white' ? colors.blackTotal : colors.whiteTotal};
}
`;