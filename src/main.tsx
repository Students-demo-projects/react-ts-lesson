import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<h1>loading...</h1>}>
    <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
