import { ISheduleStages } from "@/common/types";
import { EventSheduleSeparator, EventSheduleSepBetween, EventSheduleSepCircle, EventSheduleStage, EventSheduleStageDesc, EventSheduleStages, EventSheduleStageTime, EventSheduleStageTitle, EventSheduleWrapper } from "./styles";

const SheduleStage = ({title, time}: {title: string, time: string}) => {
    return (
        <EventSheduleStage>
            <EventSheduleStageDesc>
                <EventSheduleStageTitle>{title}</EventSheduleStageTitle>
                <EventSheduleStageTime>{time}</EventSheduleStageTime>
            </EventSheduleStageDesc>
            <EventSheduleSeparator>
                <EventSheduleSepBetween margin="0 auto"></EventSheduleSepBetween>
                <EventSheduleSepCircle margin="-2px 0 0 0"></EventSheduleSepCircle>
                <EventSheduleSepBetween margin="-4px auto 0 auto"></EventSheduleSepBetween>
            </EventSheduleSeparator>
        </EventSheduleStage>
    )
}

interface EventSheduleProps {
    stages: ISheduleStages[]
}

export default function EventShedule({stages}: EventSheduleProps) {
    return (
        <EventSheduleWrapper>
            <EventSheduleStages>
                {
                    stages.map((stage, i) => <SheduleStage key={i} title={stage.title} time={stage.time} />)
                }
            </EventSheduleStages>
        </EventSheduleWrapper>
    )
}
