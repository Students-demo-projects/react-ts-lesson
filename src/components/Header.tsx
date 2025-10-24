import { NavLink } from "react-router-dom"


function Header() {
  return (
    <nav className="flex items-center px-16 py-5 bg-blue-500 text-white gap-5">
      <h1>Logo</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </nav>
  )
}

export default Header
