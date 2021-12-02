import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/search">SEARCH PEOPLE</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
