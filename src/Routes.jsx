import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import CaseOne from "./pages/CaseOne/CaseOne";
import CaseTwo from "./pages/CaseTwo/CaseTwo";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <CaseOne/>
        },
        {
            path: "/caseTwo",
            element: <CaseTwo/>
        },
      ]
    },
  ]);