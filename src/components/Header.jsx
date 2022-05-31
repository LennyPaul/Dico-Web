import back from "../img/back.svg";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="back">
        <img
          src={back}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};
