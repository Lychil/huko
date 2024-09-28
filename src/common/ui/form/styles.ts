import { border, colors } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const FormWrapper = styled('form')`
padding: 20px;
text-align: center;
border-radius: ${border.radius.medium};
border: ${border.styles.mainSmall};
background-color: ${colors.main};
`;