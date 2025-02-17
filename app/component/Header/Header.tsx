import { Link, NavLink } from "react-router";

function Header() {
  return (
    <nav className="bg-amber-200">
      <Link to="/">
        <h1 className="text-3xl">Parques Nacionales</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="comunidades">Comunities</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
