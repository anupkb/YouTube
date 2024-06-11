import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { config } from "dotenv";
config();

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
