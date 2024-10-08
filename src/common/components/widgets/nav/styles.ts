import styled from "styled-components";
import { border, colors, font, transition } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";

export const NavPanelWrapper = styled('nav')`
padding: 10px;
background-color: ${colors.main};
border-top: ${border.styles.whiteSmall};
border-bottom: ${border.styles.whiteSmall};
`;

export const NavPanelList = styled('ul')`
display: flex;
justify-content: center;
gap: 10px;
`;

export const NavPanelItem = styled('li')``;

export const NavPanelLink = styled(Link)<{$isActive: boolean}>`
font-size: ${font.sizes.main};
font-weight: ${font.weights.semiBold};
color: ${props => props.$isActive ? colors.whiteTotal : colors.whiteTransparent};

${props => !props.$isActive &&
`
transition: ${transition.fast};
&:hover {
color: ${colors.whiteTotal};
}
`}
`;