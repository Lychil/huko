import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AppContainer from "@/common/components/app-container/AppContainer";
import Home from "@/pages/home/Home";
import MyEvent from "@/pages/my-event/MyEvent";

export default function RoutesProvider() {

    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<Home />} />
                    <Route path="create" element={<MyEvent />} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={provider} />;
}