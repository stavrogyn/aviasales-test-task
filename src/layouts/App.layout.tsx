import { Provider } from "react-redux";

import configureStore from "../state/configureStore";
import { Header } from "../containers/Header.container";
import { Searchpage } from "./Searchpage.layout";

export const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="app">
          <Header />
          <Searchpage />
        </div>
      </div>
    </Provider>
  );
};

