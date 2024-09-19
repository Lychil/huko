import { Container } from "@/common/styles/styles";
import { NavPanelItem, NavPanelLink, NavPanelList, NavPanelWrapper } from "./styles";

const items: { id: number, text: string, to: string }[] = [
    {
        id: 0,
        text: "Главная",
        to: "/home"
    },
    {
        id: 1,
        text: "По близости",
        to: "/vicinity"
    },
    {
        id: 2,
        text: "Найти спонсора",
        to: "/sponsors"
    }
]

export default function NavPanel() {
    return (
        <NavPanelWrapper>
            <Container>
                <NavPanelList>
                    {
                        items.map((item) => (
                            <NavPanelItem key={item.id}>
                                <NavPanelLink to={item.to}>{item.text}</NavPanelLink>
                            </NavPanelItem>
                        ))
                    }
                </NavPanelList>
            </Container>
        </NavPanelWrapper>
    )
}
