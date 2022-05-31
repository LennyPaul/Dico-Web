import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Definition = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const getDefinition = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/items/Definition/${state.definitionID}`
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
            <p>{data.content}</p>
          </section>
        </main>
      ) : (
        <p>Chargement....</p>
      )}
    </>
  );
};
