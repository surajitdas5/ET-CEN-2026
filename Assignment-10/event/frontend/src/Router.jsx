import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import SearchResult from "./pages/SearchResult";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddEvent from "./pages/AddEvent";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/signin", element: <SignIn /> },
            { path: "/add-event", element: <AddEvent /> },
            { path: "/event/:eid", element: <EventDetails /> },
            { path: "/event/search/:searchKey", element: <SearchResult /> },
        ]
    }
])

export default router;