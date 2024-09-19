import EventsList from "@/common/components/events-list/EventsList";
import SponsorsWidget from "@/common/components/sponsors-widget/SponsorsWidget";
import Widget from "@/common/components/widget/Widget";
import { Container } from "@/common/styles/styles";
import { HomeContent, HomeList, HomeWidjets, HomeWrapper } from "@/pages/home/styles";

export default function Home() {
    return (
        <HomeWrapper>
            <Container>
                <HomeContent>
                    <HomeList>
                        <EventsList />
                    </HomeList>
                    <HomeWidjets>
                        <Widget title="Топ спонсоры">
                            <SponsorsWidget />
                        </Widget>
                        <Widget title="Топ мероприятия">
                            <SponsorsWidget />
                        </Widget>
                    </HomeWidjets>
                </HomeContent>
            </Container>
        </HomeWrapper>
    )
}
