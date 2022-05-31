import search from "../img/search.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDirectus } from "../service/useDirectus";

export const SearchInput = ({ propositions, setPropositions }) => {
  const { word, setWord } = useDirectus(setPropositions);

  return (
    <>
      <div>
        <form>
          <input
            value={word}
            onChange={(event) => setWord(event.target.value)}
            autoFocus
          ></input>
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};
