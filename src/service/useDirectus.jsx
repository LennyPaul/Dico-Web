import { useEffect, useState } from "react";

export const useDirectus = (setPropositions) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    getPropositions();
  }, [word]);

  const getPropositions = async () => {
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
  return { setWord, word };
};
