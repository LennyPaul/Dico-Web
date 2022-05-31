import { matchRoutes, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Definition = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const getDefinition = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/items/Definition/${state.definitionID}?fields=name,content,categorie_id.name`
        );

        const { data } = await response.json();
        setData(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDefinition();
  }, []);

  return (
    <>
      <Header />
      {data ? (
        <main>
          <section className="text">
            <h1>{data.name}</h1>
            <p className="categorie">{data.categorie_id.name}</p>
            <p>{data.content}</p>
          </section>
        </main>
      ) : (
        <main>
          <section className="text">
            <p>Chargement....</p>
          </section>
        </main>
      )}
    </>
  );
};
