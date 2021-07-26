import React from 'react'
import { Provider } from "react-redux";
import configureStore from "../state/configureStore";
import Header from "./Header";
import Main from "./Main";

export const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="app">
          <Header />
          <Main />
        </div>
      </div>
    </Provider>
  );
};

export default App;
