import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StepContext } from "./Components/Common/StepContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </StepContext>
);
