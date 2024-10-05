import { border, colors } from "@/common/styles/styleConstants";
import { glass } from "@/common/styles/mixins";
import styled from "styled-components"

const SwaperWrapper = styled('div')`
cursor: default;
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 50%);
padding: 5px 10px;
display: flex;
gap: 5px;
border-radius: ${border.radius.extraSmall};
${glass}
`;

const SwaperCircle = styled('div')`
cursor: pointer;
border: ${border.styles.whiteSmall};
border-radius: ${border.radius.circle};
width: 8px;
aspect-ratio: 1;
`;

interface EventCardSwaperProps {
    activeSide: "front" | "back"
    handleChange: (arg: "front" | "back") => void
}

export default function EventCardSwaper({activeSide, handleChange}: EventCardSwaperProps) {
    return (
        <SwaperWrapper>
            <SwaperCircle onClick={() => handleChange("front")} style={{backgroundColor: activeSide === "front" ? colors.whiteTotal : colors.transparent }}></SwaperCircle>
            <SwaperCircle onClick={() => handleChange("back")} style={{backgroundColor: activeSide === "back" ? colors.whiteTotal : colors.transparent }}></SwaperCircle>
        </SwaperWrapper>
    )
}
