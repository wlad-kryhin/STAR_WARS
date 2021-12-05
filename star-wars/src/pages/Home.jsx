import { useState, useEffect } from "react";
import { SmallLoader } from "../components/Skeleton";
import { FetchPeopleStarWars } from "../services/apiService";
import { Link } from "react-router-dom";
import { GrLinkUp } from "react-icons/gr";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPeople() {
      setLoading(true);
      const newPeople = await FetchPeopleStarWars(page);
      setPeople((prevState) => [...prevState, ...newPeople]);
      setLoading(false);
      if (page >= 2) {
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
    fetchPeople();
  }, [page]);

  const ScrollOnTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="image">
      <section className="home">
        <h1 className="title">STAR WARS HEROS</h1>
        <table className="table">
          <thead>
            <tr className="table__tr">
              <td className="table__image up"></td>
              <td className="table__name up">Name</td>
              <td className="table__sum up">Films sum</td>
            </tr>
          </thead>{" "}
          {people &&
            people.map(({ name, url, films }) => {
              const id = url.split("/").reverse()[1];
              return (
                <tr key={name} className="table__tr">
                  <td className="table__image">
                    <img
                      src="https://images3.alphacoders.com/114/thumb-1920-11439.png"
                      alt=""
                    />
                  </td>
                  <td className="table__name">
                    <Link to={`/${name}/${id}`} className="table__name">
                      {name}
                    </Link>
                  </td>
                  <td className="table__sum">{films.length}</td>
                </tr>
              );
            })}
        </table>
        {!people && loading ? (
          <SmallLoader
            height={20}
            width={20}
            text={"Please wait for data loading"}
          />
        ) : (
          ""
        )}

        {people.length > 8 && (
          <button
            type="button"
            onClick={() => setPage(page + 1)}
            className="button"
          >
            {loading ? <SmallLoader text={"loading"} /> : "Load more..."}
          </button>
        )}
        {people.length > 16 && (
          <button type="button" className="button__up" onClick={ScrollOnTop}>
            <GrLinkUp size="3em" />
          </button>
        )}
      </section>
    </main>
  );
}
