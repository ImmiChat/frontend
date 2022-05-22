import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AuthenticationContextProvider from "./context/AuthenticationContextProvider";
import { BrowserRouter } from "react-router-dom";
import FeedContextProvider from "./context/FeedContextProvider";
import UsersContextProvider from "./context/UsersContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <FeedContextProvider>
        <UsersContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UsersContextProvider>
      </FeedContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
