import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import AuthStatus from "./components/AuthStatus/AuthStatus.tsx";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Admin = lazy(() => import("./pages/admin/Admin.tsx"));
const Lugatlar = lazy(() => import("./pages/Lugatlar/FN-Lugatlar.tsx"));
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/status" element={<AuthStatus />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/FN-Lugatlar" element={<Lugatlar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
