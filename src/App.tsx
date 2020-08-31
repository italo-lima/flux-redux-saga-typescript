import React from "react";
import { Provider } from "react-redux";

import { store, persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
