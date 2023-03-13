import { Outlet, NavLink } from "react-router-dom";
import carousel1 from "../../assets/carousel1.webp";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src="carousel1" alt="Some Image" />
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>

      <Outlet className="outlet" />
    </>
  );
}
