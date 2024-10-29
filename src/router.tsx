import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { FormPage } from "./FormPage/FormPage";
import { MainPage } from "./MainPage/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/form", element: <FormPage /> },
      { path: "/", element: <MainPage /> },
    ],
  },
]);