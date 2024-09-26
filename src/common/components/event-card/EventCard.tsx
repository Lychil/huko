import EventCardHeader from "@/common/components/event-card/EventCardHeader";
import EventCardIndicators from "@/common/components/event-card/EventCardIndicators";
import { EventCardContent, EventCardDesc, EventCardTitle, EventCardWrapper } from "@/common/components/event-card/styles";
import { IEvent } from "@/store/reducers/events/eventsApi";

export default function EventCard({event}: {event: IEvent}) {
    const {title, description, location, start, finish, click, want, favourite} = event;

    return (
        <EventCardWrapper>
            <EventCardHeader location={location} start={start} finish={finish} />
            <EventCardContent>
                <EventCardTitle>{title}</EventCardTitle>
                <EventCardDesc>
                    {description}
                </EventCardDesc>
                <EventCardIndicators indicators={[click || 0, want || 0, favourite || 0]} />
            </EventCardContent>
        </EventCardWrapper>
    )
}
