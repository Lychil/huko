import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import AppContainer from "@/common/components/app-container/AppContainer";
import Home from "@/pages/home/Home";
import MyEvent from "@/pages/my-event/MyEvent";
import Auth from "@/pages/auth/Auth";
import Reg from "@/common/components/auth/reg/Reg";
import Login from "@/common/components/auth/login/Login";
import { checkIsAuth } from "@/store/reducers/user/userApi";

export default function RoutesProvider() {
    const isAuthUser: boolean = checkIsAuth();

    const notAuthProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="auth/" element={<Auth />}>
                        <Route path="reg" element={<Reg />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Route>
            </>
        )
    )

    const authProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<Home />} />
                    <Route path="create" element={<MyEvent />} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={isAuthUser ? authProvider : notAuthProvider} />;
}