import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login/Login.tsx"));
const Register = lazy(() => import("./pages/Register/Register.tsx"));
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
