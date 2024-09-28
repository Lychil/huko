import { colors, font, transition } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthItemWrapper = styled('div')``;

export const AuthItemForm = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 20px;
`;

export const AuthTitle = styled('h1')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.semiBold};
color: ${colors.whiteTotal};
margin-bottom: 20px;
`;

export const AuthChange = styled('p')`
margin-top: 5px;
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.medium};
color: ${colors.whiteTotal};
`;

export const AuthChangeLink = styled(Link)`
font-size: inherit;
font-weight: inherit;
color: ${colors.whiteTransparent};
transition: ${transition.fast};

&:hover {
    color: ${colors.whiteTotal};
}
`;