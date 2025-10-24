import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<h1>loading...</h1>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
