import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes.jsx";
import CountContext from "./Context/CountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountContext>
      <RouterProvider router={router} />
    </CountContext>
  </StrictMode>
);
