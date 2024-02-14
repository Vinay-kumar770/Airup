import React from "react";
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import App from "./App";
import { StateContextProvider } from "./context";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    desiredChainId={11155111}
    activeChain={Sepolia}
    clientId="bc45be29fd666ed160348f9cd5aab11f"
  >
      <StateContextProvider>
        <App />
      </StateContextProvider>
  </ThirdwebProvider>
);