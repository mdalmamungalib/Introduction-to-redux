import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import CaseOne from "./pages/CaseOne/CaseOne";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <CaseOne/>
        }
      ]
    },
  ]);