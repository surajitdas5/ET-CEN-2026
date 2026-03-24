import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import EventEx from "./pages/EventEx";
import Calc from "./pages/Calc"
import Layout from "./layout/Layout";

const router = createBrowserRouter([
    // { path: "/", element: <Intro /> },
    // { path: "/event", element: <EventEx /> },
    // { path: "/calc", element: <Calc /> },
    { 
        path: "/", 
        element: <Layout />, 
        children: [
            { path: "/", element: <Intro /> },
            { path: "/event", element: <EventEx /> },
            { path: "/calc", element: <Calc /> },
        ]
    },
])


export default router