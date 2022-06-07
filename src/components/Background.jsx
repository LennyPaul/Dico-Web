import vert from "../img/rond-vert.svg";
import rouge from "../img/rond-rouge.svg";
import bleu from "../img/rond-bleu.svg";
import jaune from "../img/rond-yellow.svg";
import { useNavigate } from "react-router-dom";

export const Bg = () => {
  const navigate = useNavigate();

  return (
    <div className="bg">
      <div className="vert">
        <img src={vert} alt="" />{" "}
      </div>
      {/* <div className="rouge">
        <img src={rouge} alt="" />{" "}
      </div>
      <div className="bleu">
        <img src={bleu} alt="" />{" "}
      </div>
      <div className="jaune">
        <img src={jaune} alt="" />{" "}
      </div> */}
    </div>
  );
};
