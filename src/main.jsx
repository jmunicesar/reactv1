import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import Primercomponente from "./Primercomponente.jsx";
import Segundocomponente from "./Segundocomponente.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Primercomponente />
    <Segundocomponente />
  </StrictMode>
);
