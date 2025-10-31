import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between px-10 py-4 
        bg-white text-gray-800 shadow-sm 
        dark:bg-gray-900 dark:text-gray-100 
        transition-colors duration-300
      "
    >
      <h1 className="text-2xl font-bold tracking-wide">Logo</h1>

      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Login
        </NavLink>
        <NavLink
          to="/status"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Auth Status
        </NavLink>
        <NavLink
          to="/Admin"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
