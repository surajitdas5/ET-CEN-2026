import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import One from "./pages/One";
import Two from "./pages/Two";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <One /> },
            { path: "/two", element: <Two /> },
        ]
    }
])
export default router