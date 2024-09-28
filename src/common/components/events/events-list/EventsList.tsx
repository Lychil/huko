import { useGetEventsQuery } from '@/store/reducers/events/eventsApi';
import { useEffect } from 'react';
import EventCard from '@/common/components/events/event-card/EventCard';
import { EventsListWrapper } from '@/common/components/events/events-list/styles';

export default function EventsList() {
    const { data: events, isLoading } = useGetEventsQuery();

    useEffect(() => {
        console.log(events);
    }, [events, isLoading]);

    return (
        <EventsListWrapper>
            {
                isLoading ? "Загрузка" : events ? events.map(event => <EventCard key={event.id} event={event} />) : "Ничего не найдено"
            }
        </EventsListWrapper>
    )
}
