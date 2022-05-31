import search from "../img/search.svg";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("/search");
  };

  const goToDefinitions = (categorieID) => {
    navigate("/definitions", { state: { categorieID } });
    console.log({ categorieID });
  };

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
          <h2>Votre lexique du designer</h2>
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
            <button
              value="4  "
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              UI-UX
            </button>
            <button
              value="5"
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              COLORIMETRIE
            </button>
            <button
              value="6"
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              TYPOGRAPHIE
            </button>
          </div>
          <div>
            <button
              value="7"
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              GRAPHISME
            </button>
            <button
              value="8"
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              {" "}
              PRINT
            </button>
            <button
              value="9"
              onClick={(event) => goToDefinitions(event.target.value)}
            >
              MOTION
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
