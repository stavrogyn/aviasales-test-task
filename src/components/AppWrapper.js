import { Provider } from 'react-redux';
import App from './App'
import configureStore from '../state/configureStore'


const store = configureStore()

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}