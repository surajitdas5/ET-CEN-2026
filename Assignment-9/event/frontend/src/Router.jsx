import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import SearchResult from "./pages/SearchResult";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/event/:eid", element: <EventDetails /> },
            { path: "/event/search/:searchKey", element: <SearchResult /> },
        ]
    }
])

export default router;