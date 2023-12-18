import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { Provider } from "react-redux";
import {store} from './store/index'

// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
          <Provider store={store}>
            <App />
          </Provider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
