import logo from "../images/logo.svg";
import { useDispatch } from "react-redux";
import {
  sendInitialRequest,
  refreshSearchState,
} from "../state/actions/search.actions";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(refreshSearchState());
    dispatch(sendInitialRequest());
  };

  return (
    <div className="app-logo__wrapper">
      <img
        src={logo}
        className="app-logo"
        alt="app logo"
        onClick={handleClick}
      />
    </div>
  );
};

