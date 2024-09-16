import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AppContainer from "@/common/components/app-container/AppContainer";
import Home from "@/pages/home/Home";

export default function RoutesProvider() {

    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<Home />} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={provider} />;
}