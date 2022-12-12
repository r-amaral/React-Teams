import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import View from "./Views";
import { Provider } from "react-redux";
import store from "./Redux/store/configureStore";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <View />
        </Provider>
    </React.StrictMode>
);
