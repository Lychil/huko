import EventCreate from "@/common/components/events/event-create/EventCreate";
import { Container } from "@/common/styles/styles";
import { MyEventContent, MyEventWrapper } from "@/pages/my-event/styles";

export default function MyEvent() {
    return (
        <MyEventWrapper>
            <Container>
                <MyEventContent>
                    <EventCreate />
                </MyEventContent>
            </Container>
        </MyEventWrapper>
    )
}
