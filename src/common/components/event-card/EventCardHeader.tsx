import { EventCardClock, EventCardClockImg, EventCardClockText, EventCardFavouriteBtn, EventCardFavouriteImg, EventCardHeaderImg, EventCardHeaderWrapper, EventCardLocation } from '@/common/components/event-card/styles'
import clockImg from "@/common/images/svg/clock.svg";
import eventImg from "@/common/images/event.jpg";
import heartImg from "@/common/images/svg/heart.svg";

export default function EventCardHeader() {
    return (
        <EventCardHeaderWrapper>
            <EventCardHeaderImg src={eventImg} />
            <EventCardLocation title="Плехановская ул., 12офис 202, этаж 2">Плехановская ул., 12офис 202, этаж 2</EventCardLocation>
            <EventCardFavouriteBtn>
                <EventCardFavouriteImg src={heartImg} />
            </EventCardFavouriteBtn>
            <EventCardClock>
                <EventCardClockImg src={clockImg} />
                <EventCardClockText>12:00 - 20:00</EventCardClockText>
            </EventCardClock>
        </EventCardHeaderWrapper>
    )
}
