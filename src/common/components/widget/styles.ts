import { colors, font } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const WidgetWrapper = styled('div')`
overflow: hidden;
padding: 10px;
background-color: ${colors.whiteTotal};
`;

export const WidgetTitle = styled('p')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.semiBold};
margin-bottom: 10px;
`;