import { useLocation } from "react-router-dom";
import { Container } from "@/common/styles/styles";
import { NavPanelItem, NavPanelLink, NavPanelList, NavPanelWrapper } from "@/common/components/widgets/nav/styles";


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
    const location = useLocation();

    return (
        <NavPanelWrapper>
            <Container>
                <NavPanelList>
                    {
                        items.map((item) => (
                            <NavPanelItem key={item.id}>
                                <NavPanelLink $isActive={location.pathname === item.to} to={item.to}>{item.text}</NavPanelLink>
                            </NavPanelItem>
                        ))
                    }
                </NavPanelList>
            </Container>
        </NavPanelWrapper>
    )
}
