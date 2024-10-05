import { useState } from "react";
import EventCardDetails from "./EventCardDetails";
import EventCardIndicators from "./EventCardIndicators";
import EventCardSwaper from "./EventCardSwaper";
import { EventCardBack, EventCardDayMonth, EventCardDayNumber, EventCardDayWrapper, EventCardDescText, EventCardDescTitle, EventCardFront, EventCardInfoTitle, EventCardInfoWrapper, EventCardWrapper } from "@/common/components/events/event-card/styles";
import { IEvent } from "@/store/reducers/events/eventsApi";
import { CardSidesType } from "@/common/components/events/event-card/types";
import bgImg from "@/common/images/bg.jpeg";

export default function EventCard({ event }: { event: IEvent }) {
    const { title, location, description, start, finish, click, want, favourite } = event;
    const [activeSide, setActiveSide] = useState<CardSidesType>("front");

    const handleChange = (arg: CardSidesType) =>{
        setActiveSide(arg);
    }

    return (
        <EventCardWrapper image={bgImg}>
            {activeSide === "front" ?
                <EventCardFront>
                    <EventCardDayWrapper>
                        <EventCardDayNumber>29</EventCardDayNumber>
                        <EventCardDayMonth>MAY</EventCardDayMonth>
                    </EventCardDayWrapper>

                    <EventCardIndicators click={click || 0} want={want || 0} favourite={favourite || 0} />

                    <EventCardInfoWrapper>
                        <EventCardInfoTitle>{title}</EventCardInfoTitle>
                        <EventCardDetails location={location} start={start} finish={finish} />
                    </EventCardInfoWrapper>
                </EventCardFront>
                :
                <EventCardBack>
                    <EventCardDescTitle>Описание</EventCardDescTitle>
                    <EventCardDescText>{description}</EventCardDescText>
                </EventCardBack>
            }
            <EventCardSwaper activeSide={activeSide} handleChange={handleChange} />
        </EventCardWrapper>
    )
}
