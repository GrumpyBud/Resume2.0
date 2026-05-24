import { createBrowserRouter, RouterProvider } from "react-router";

import { AppProviders } from "@/providers/app-providers";
import { HomeRoute } from "@/routes/home";
import { RootRoute } from "@/routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
    ],
  },
]);

export function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
