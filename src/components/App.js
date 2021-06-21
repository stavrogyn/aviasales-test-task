import { Provider } from 'react-redux';
import configureStore from '../state/configureStore'
import Header from './Header'
import Main from './Main';

const store = configureStore()

export default function App() {
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
}