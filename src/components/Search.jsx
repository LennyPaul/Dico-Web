import { SearchInput } from "./SearchInput";
import logo from "../img/logo.svg";
import { SearchPropositions } from "./SearchPropositions";
import { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [propositions, setPropositions] = useState([]);
  const navigate = useNavigate();

  const goToDefinition = (definitionID) => {
    navigate("/definition", { state: { definitionID } });
  };

  return (
    <>
      <Header />
      <main>
        <section className="search">
          <SearchInput setPropositions={setPropositions} />
        </section>
        <SearchPropositions
          propositions={propositions}
          goToDefinition={goToDefinition}
        ></SearchPropositions>
      </main>
    </>
  );
};
