import EventsList from "@/common/components/events/events-list/EventsList";
import { Container } from "@/common/styles/styles";
import { HomeContent, HomeList, HomeWrapper } from "@/pages/home/styles";

export default function Home() {
    return (
        <HomeWrapper>
            <Container>
                <HomeContent>
                    <HomeList>
                        <EventsList />
                    </HomeList>
                    {/* NO DELETE */}
                    {/* <HomeWidjets>
                        <Widget title="Топ спонсоры">
                            <SponsorsWidget />
                        </Widget>
                        <Widget title="Топ мероприятия">
                            <SponsorsWidget />
                        </Widget>
                    </HomeWidjets> */}
                </HomeContent>
            </Container>
        </HomeWrapper>
    )
}
