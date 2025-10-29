import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";

const Home = lazy(() => import("./pages/home"));
const Login =lazy(()=>import("./pages/login"))
const Register =lazy(()=>import("./pages/register"))
const Admin=lazy(()=>import("./pages/admin/Admin.tsx")) 
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/Admin" element={<Admin />} />
        
      </Routes>
    </>
  );
}

export default App;
