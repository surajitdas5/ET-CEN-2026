import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App(){
  return <RouterProvider router={router} />
}

export default App