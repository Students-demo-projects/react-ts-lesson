import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
// import Maxsulot from "./components/Maxsulot.tsx";

const Maxsulot=lazy(()=>import("./components/Maxsulot.tsx"))
const Home = lazy(() => import("./pages/home"));
const Login =lazy(()=>import("./pages/login"))
const Register =lazy(()=>import("./pages/register"))
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maxsulot" element={<Maxsulot />} />
        
      </Routes>
    </>
  );
}

export default App;
