import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";

const Home = lazy(() => import("./pages/home"));
const Login =lazy(()=>import("./pages/login"))
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </>
  );
}

export default App;
