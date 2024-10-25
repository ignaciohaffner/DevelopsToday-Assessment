import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCountriesPage from "./Pages/AllCountriesPage.tsx";
import CountryPage from "./Pages/CountryPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCountriesPage />,
  },
  {
    path: "/country/:countryCode",
    element: <CountryPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
