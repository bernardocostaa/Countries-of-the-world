import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemaMode } from "./ThemaContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<ThemaMode>
  <App />
</ThemaMode>
);
