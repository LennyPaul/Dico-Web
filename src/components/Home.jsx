import search from "../img/search.svg";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("/search");
  };

  const goToDefinitions = (categorie) => {};

  return (
    <>
      <header>
        <h1>SquidSearch</h1>
      </header>
      <main>
        <section className="mid">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h2>Votre lexique du designer.</h2>
        </section>

        <section className="search">
          <form>
            <input onClick={goToSearch}></input>
            <button onClick={goToSearch} type="submit">
              <img src={search} alt="" />
            </button>
          </form>
          <div className="lang">
            <button className="current">France</button>
            <button>Anglais</button>
          </div>
        </section>
        <section className="cat">
          <div>
            <button>UI-UX</button>
            <button>COLORIMETRIE</button>
            <button>TYPOGRAPHIE</button>
          </div>
          <div>
            <button>GRAPHISME</button>
            <button>PRINT</button>
            <button>MOTION</button>
          </div>
        </section>
      </main>
    </>
  );
};
