import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AppContainer from "@/common/components/app-container/AppContainer";

export default function RoutesProvider() {

    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<></>} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={provider} />;
}