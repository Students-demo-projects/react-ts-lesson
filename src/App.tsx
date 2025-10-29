import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"))
const Register = lazy(() => import("./pages/register"))
const Vedio =lazy(()=>import("./pages/vedio/Vedio.tsx"))
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vedio" element={<Vedio/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
