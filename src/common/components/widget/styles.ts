import styled from "styled-components";
import { colors, font, shadow } from "@/common/styles/styleConstants";

export const WidgetWrapper = styled('div')`
overflow: hidden;
padding: 10px;
background-color: ${colors.whiteTotal};
-webkit-box-shadow: ${shadow.default};
-moz-box-shadow: ${shadow.default};
box-shadow: ${shadow.default};
`;

export const WidgetTitle = styled('p')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.semiBold};
margin-bottom: 10px;
`;