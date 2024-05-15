import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/hot">Hot</NavLink>
      </li>
      <li>
        <NavLink to="/regular">Regular</NavLink>
      </li>
    </ul>
  );
};
