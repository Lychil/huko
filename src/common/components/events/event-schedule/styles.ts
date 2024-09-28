import { border, colors } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const EventSheduleWrapper = styled('div')``;

export const EventSheduleStages = styled('div')`
display: flex;
flex-direction: column;
`;

export const EventSheduleStage = styled('div')`
display: flex;
justify-content: space-between;
`;

export const EventSheduleStageDesc = styled('div')`
margin: auto 0
`;

export const EventSheduleStageTitle = styled('p')``;

export const EventSheduleStageTime = styled('p')``;

export const EventSheduleSeparator = styled('div')`
`;

export const EventSheduleSepCircle = styled('div')<{margin: string}>`
width: 30px;
height: 30px;
margin: ${props => props.margin};
border-radius: ${border.radius.circle};
background-color: ${colors.overlay};
`;

export const EventSheduleSepBetween = styled('div')<{margin: string}>`
margin: ${props => props.margin};
width: 10px;
height: 30px;
background-color: ${colors.overlay};
`;