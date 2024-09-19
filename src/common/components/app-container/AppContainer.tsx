import { Outlet } from "react-router-dom";
import Header from "@/common/components/header/Header";
import NavPanel from "@/common/components/nav/NavPanel";
import { AppContainerWrapper } from "@/common/components/app-container/styles";

export default function AppContainer() {
    return (
        <AppContainerWrapper>
            <Header />
            <NavPanel />
            <Outlet />
        </AppContainerWrapper>
    )
}
