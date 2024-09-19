import EventCardHeader from "@/common/components/event-card/EventCardHeader";
import EventCardIndicators from "@/common/components/event-card/EventCardIndicators";
import { EventCardContent, EventCardDesc, EventCardTitle, EventCardWrapper } from "@/common/components/event-card/styles";

export default function EventCard() {
    return (
        <EventCardWrapper>
            <EventCardHeader />
            <EventCardContent>
                <EventCardTitle>Мероприятие в честь 20 летия клуба и чего то там еще</EventCardTitle>
                <EventCardDesc>
                    sdfsjkdf dsjfsjdkfj dkfjdsfjk fsfsjfsdj fsfdnjsdf sdjfdsf sdfjsdfjs dsfdsjf sdfdsfjs
                    sdfjdsjf sdfsjf dsfsdfds sfsdf sf fdsfs fdsf f dsfsdf f dsf dsf dsf s df sf  df describe
                    fdsfsf sdfsf dsfdf sfdsf dsf sf f dsf fd s hfdshsf dghfghfds fdsbhfghfds bfdhfd dsfjhfsdgfshdfg
                    fsdjfdsjfsfdsffds ffsfsfdsfsdfsfs dsfsfsddfsfds dsfsfdsfdsfdsf dsfsfds
                </EventCardDesc>
                <EventCardIndicators />
            </EventCardContent>
        </EventCardWrapper>
    )
}
