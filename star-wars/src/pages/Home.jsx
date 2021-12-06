import { useState, useEffect } from "react";
import { SmallLoader } from "../components/Skeleton";
import { FetchPeopleStarWars } from "../services/apiService";
import { GrLinkUp } from "react-icons/gr";
import { HomeTable } from "./HomeTable";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPeople(page);
  }, [page]);

  const fetchPeople = async (page) => {
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
  };

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
        <HomeTable people={people} />
        {people.length === 0 && loading ? (
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
