import EventCard from '@/common/components/event-card/EventCard';
import { EventsListWrapper } from '@/common/components/events-list/styles';

export default function EventsList() {
    return (
        <EventsListWrapper>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </EventsListWrapper>
    )
}
