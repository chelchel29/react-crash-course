import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header>
      <div className="flex items-center gap-2">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-700" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}

export default Header;
