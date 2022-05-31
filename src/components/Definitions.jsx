import logo from "../img/logo.svg";
import { SearchPropositions } from "./SearchPropositions";
import { matchRoutes, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Definitions = () => {
  const { state } = useLocation();
  console.log(state.categorieID);
  const [propositions, setPropositions] = useState([]);
  const navigate = useNavigate();

  const goToDefinition = (definitionID) => {
    console.log({ definitionID });
    navigate("/definition", { state: { definitionID } });
  };

  useEffect(() => {
    const getDefinition = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/items/Definition?fields=name,categorie_id.name&filter[categorie_id][_eq]=${state.categorieID}`
        );
        const { data } = await response.json();
        setPropositions(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDefinition();
  }, []);
  return (
    <>
      <Header />
      <main>
        <SearchPropositions
          propositions={propositions}
          goToDefinition={goToDefinition}
        ></SearchPropositions>
      </main>
    </>
  );
};
