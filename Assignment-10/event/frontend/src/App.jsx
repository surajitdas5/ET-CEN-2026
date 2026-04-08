import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";

import router from "./Router";
import { AuthProvider } from "./context/AuthContext";

function App(){
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;