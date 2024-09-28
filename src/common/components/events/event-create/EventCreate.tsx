import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCreateDesc from "@/common/components/events/event-create/EventCreateDesc";
import EventCreateProgram from "@/common/components/events/event-create/EventCreateProgram";
import EventShedule from "@/common/components/events/event-schedule/EventShedule";
import { EventCreateBtn, EventCreateImgWrapper, EventCreateWrapper } from "@/common/components/events/event-create/styles";
import { ISheduleStages } from "@/common/types";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useCreateEventMutation } from "@/store/reducers/events/eventsApi";
import { routes } from "@/router/routes";

const homePath = routes.homePath;

export default function EventCreate() {
    const navigate = useNavigate();
    const newEvent = useAppSelector(state => state.newEventReducer);
    const [createEvent] = useCreateEventMutation();
    const [stages, setStages] = useState<ISheduleStages[]>([]);

    const handleAddStages = (stage: ISheduleStages) => {
        setStages(prev => [...prev, stage])
    }

    const handleCreate = () => {
        createEvent(newEvent);
        navigate(homePath);
    }

    return (
        <EventCreateWrapper>
            <EventCreateImgWrapper>
            </EventCreateImgWrapper>
            <EventCreateDesc />
            <EventCreateProgram setStages={handleAddStages} />
            <EventShedule stages={stages} />
            <EventCreateBtn onClick={handleCreate}>Создать</EventCreateBtn>
        </EventCreateWrapper >
    )
}
