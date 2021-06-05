import logo from "../img/logo.svg";

export default function Header () {
    return (
      <div className="app-logo__wrapper">
        <img src={logo} className="app-logo" alt="app logo" />
      </div>
    );
  }