import logo from "./img/logo.svg";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <div className="app-logo__wrapper">
          <div className="app-logo">
            <img src={logo} width="60" height="60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
