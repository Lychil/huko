import { Outlet } from "react-router-dom";
import Header from "@/common/components/header/Header";
import { Container } from "@/common/styles/styles";

export default function AppContainer() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}
