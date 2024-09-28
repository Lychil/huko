import { EventCardClock, EventCardClockImg, EventCardClockText, EventCardFavouriteBtn, EventCardFavouriteImg, EventCardHeaderImg, EventCardHeaderWrapper, EventCardLocation } from '@/common/components/events/event-card/styles'
import clockImg from "@/common/images/svg/clock.svg";
import eventImg from "@/common/images/event.jpg";
import heartImg from "@/common/images/svg/heart.svg";

interface EventCardHeaderProps {
    location: string,
    start: string,
    finish: string
}

export default function EventCardHeader({location, start, finish}: EventCardHeaderProps) {
    return (
        <EventCardHeaderWrapper>
            <EventCardHeaderImg src={eventImg} />
            <EventCardLocation title={location}>{location}</EventCardLocation>
            <EventCardFavouriteBtn>
                <EventCardFavouriteImg src={heartImg} />
            </EventCardFavouriteBtn>
            <EventCardClock>
                <EventCardClockImg src={clockImg} />
                <EventCardClockText>{start} - {finish}</EventCardClockText>
            </EventCardClock>
        </EventCardHeaderWrapper>
    )
}
