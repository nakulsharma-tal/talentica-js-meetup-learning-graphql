import React from "react";
import ReactDOM from "react-dom/client";
import AppApolloProvider from "./GraphQL/AppApolloProvider.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppApolloProvider>
      <App />
    </AppApolloProvider>
  </React.StrictMode>
);
