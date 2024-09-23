import { useState } from "react";
import EventCreateDesc from "@/common/components/event-create/EventCreateDesc";
import EventCreateProgram from "@/common/components/event-create/EventCreateProgram";
import EventShedule from "@/common/components/event-schedule/EventShedule";
import { EventCreateImgWrapper, EventCreateWrapper } from "@/common/components/event-create/styles";
import { ISheduleStages } from "@/common/types";


export default function EventCreate() {
    const [stages, setStages] = useState<ISheduleStages[]>([]);

    const handleAddStages = (stage: ISheduleStages) => {
        setStages(prev => [...prev, stage])
    }

    return (
        <EventCreateWrapper>
            <EventCreateImgWrapper>
            </EventCreateImgWrapper>
            <EventCreateDesc />
            <EventCreateProgram setStages={handleAddStages} />
            <EventShedule stages={stages} />
        </EventCreateWrapper >
    )
}
