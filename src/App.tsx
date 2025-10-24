import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";

const Home = lazy(() => import("./pages/home/index.tsx"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;
