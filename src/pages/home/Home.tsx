import { Container } from "@/common/styles/styles";
import { HomeContent, HomeList, HomeWidjets, HomeWrapper } from "@/pages/home/styles";

export default function Home() {
    return (
        <HomeWrapper>
            <Container>
                <HomeContent>
                    <HomeList></HomeList>
                    <HomeWidjets></HomeWidjets>
                </HomeContent>
            </Container>
        </HomeWrapper>
    )
}
