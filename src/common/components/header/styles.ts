import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";

export const HeaderWrapper = styled('header')`
padding: 20px;
background-color: ${colors.main};
`;

export const HeaderContent = styled('div')`
display: flex;
justify-content: space-between;
`;