import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list--item">
            <NavLink
              to="/"
              className="navigation__list--link"
              activeClassName="active"
            >
              HOME
            </NavLink>
          </li>
          <li className="navigation__list--item">
            <NavLink
              to="/search"
              className="navigation__list--link"
              activeClassName="active"
            >
              SEARCH PEOPLE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
