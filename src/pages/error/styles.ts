import { colors, font, transition } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorWrapper = styled('div')`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const ErrorMessage = styled('div')`
text-align: center;
`;

export const ErrorMessageCode = styled('p')`
font-size: ${font.sizes.error};
font-weight: ${font.weights.bold};
margin-bottom: 20px;
`;

export const ErrorMessageText = styled('p')`
font-size: ${font.sizes.title};
font-weight: ${font.weights.bold};
margin-bottom: 10px;
`;

export const ErrorMessageLink = styled(Link)`
font-size: ${font.sizes.title};
font-weight: ${font.weights.bold};
color: ${colors.accent};
text-decoration: none;
transition: ${transition.fast};

&:hover {
    text-decoration: underline;
}
`;