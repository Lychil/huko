import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
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
                <Route path="*" element={<Navigate to="/auth/login" replace />} />
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
                {/* <Route path="/error" element={<Error />} /> */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </>
        )
    );

    return <RouterProvider router={isAuthUser ? authProvider : notAuthProvider} />;
}