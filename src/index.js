import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App/App";
import "modern-normalize";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

import { Provider } from "react-redux";
import {store, persistor }from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>
       
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
