import { Link, Outlet } from "react-router";
import { useTheme } from "../context/ThemeContext";

function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
      <nav className="mx-auto flex max-w-4xl items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
        <Link to="/" className="text-xl font-bold tracking-tight">
          CardNotes.
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/new" className="text-sm font-medium hover:text-blue-500">
            New Note
          </Link>

          <button
            onClick={toggleTheme}
            className="rounded-md border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {" "}
            {theme === "light" ? "Dark" : "Light"}
            Mode
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
