import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between px-16 py-5 bg-blue-500 text-white">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-xl">Logo</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/status">Auth Status</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </nav>
  );
}

export default Header;
