import EventsList from "@/common/components/events/events-list/EventsList";
import SponsorsWidget from "@/common/components/widgets/sponsors-widget/SponsorsWidget";
import Widget from "@/common/components/widgets/widget/Widget";
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
