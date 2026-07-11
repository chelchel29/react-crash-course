import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import { userLoader } from "./loaders/user-loader";
import UserPage from "./pages/UserPage";
import { searchUserAction } from "./actions/search-user-action";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/users",
          element: <UserPage />,
          loader: userLoader,
          action: searchUserAction,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
