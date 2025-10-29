import { NavLink, useNavigate } from "react-router-dom"


function Header() {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/card"); // Card sahifasiga o'tadi
  };

  return (
    <nav className="flex items-center px-16 py-5 bg-blue-500 text-white gap-5">
      <h1 className="font-bold text-xl cursor-pointer">Logo</h1>

      <NavLink to="/" className="hover:underline">
        Home
      </NavLink>

      <NavLink to="/login" className="hover:underline">
        Login
      </NavLink>

      <h1 
        onClick={handleChange}
        className="cursor-pointer hover:text-gray-200 transition"
      >
Moshinalar 
      </h1>
    </nav>
  );
}

export default Header;
