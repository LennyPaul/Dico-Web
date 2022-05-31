import search from "../img/search.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ setPropositions }) => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getDefinition = async () => {
      if (!word.trim()) {
        setPropositions([]);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/items/Definition?fields=name,id&filter[name][_starts_with]=${word}`
        );

        const { data } = await response.json();

        setPropositions(data);
      } catch (error) {
        console.error(error);
      }
    };

    getDefinition();
  }, [word]);

  const gotToDefinition = () => {
    //navigate("/definition", { state: { definition: "abdc" } });
  };

  return (
    <>
      <div>
        <form>
          <input
            value={word}
            onChange={(event) => setWord(event.target.value)}
            autoFocus
          ></input>
          <button onClick={gotToDefinition} type="submit">
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};
