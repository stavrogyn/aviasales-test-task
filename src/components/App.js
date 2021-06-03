import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendInitialRequest } from '../store/actions'
import logo from "../img/logo.svg";
import Content from './Content'

const Logo = () => {
  return (
    <div className="app-logo__wrapper">
      <img src={logo} className="app-logo" alt="app logo" />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendInitialRequest())
  });

  return (
    <div className="app-wrapper">
      <div className="app">
        <Logo />
        <Content />
      </div>
    </div>
  );
}

export default App;
