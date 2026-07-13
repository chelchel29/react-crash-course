import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard, { dishboardLoader } from "./pages/Dashboard";
import CreateNote, { createNoteAction } from "./pages/CreateNote";
import NoteDetail, { NoteDetailLoader } from "./pages/NoteDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: dishboardLoader,
        },
        {
          path: "/new",
          element: <CreateNote />,
          action: createNoteAction,
        },
        {
          path: "/note/:id",
          element: <NoteDetail />,
          loader: NoteDetailLoader,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <>
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
