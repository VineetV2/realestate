import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-1dwxnh60alh3zuza.us.auth0.com"
     clientId="bHw58Gg0lz2T79NyCvMJu8o2DcWVQ9qT"
     authorizationParams={{
      redirect_uri: "https://realestate-n39u.vercel.app"
     }}
     audience="https://realestate-ten-theta.vercel.app"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
