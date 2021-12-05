import { useParams } from "react-router-dom";
import {
  FetchDetailsInfo,
  FetchHomeWorld,
  FetchFilms,
} from "../services/apiService";
import { SmallLoader } from "../components/Skeleton";
import { useEffect, useState } from "react";
import { FilmList } from "../components/FilmsList";
export default function DetailsInfo() {
  const [information, setInformation] = useState(null);
  const [films, setFilms] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function FetchInfo() {
      setLoading(true);
      const starWarInfo = await FetchDetailsInfo(id);
      const homeWorld = await FetchHomeWorld(starWarInfo.homeworld);
      const movies = await FetchFilms(starWarInfo.films);

      // const result = await Promise.all([starWarInfo, homeWorld, movies]);
      setInformation(starWarInfo);
      setPlanet(homeWorld);
      setFilms(movies);
      setLoading(false);
    }
    FetchInfo();
  }, []);

  return (
    <>
      {loading && <SmallLoader />}
      {information && (
        <section className="information">
          <h2 className="title">
            Details information about{" "}
            <span className="active">{information.name}</span>
          </h2>
          <table className="table__info">
            <tr>
              <td className="table__left">Name</td>
              <td className="table__right">{information.name}</td>
            </tr>
            <tr>
              <td className="table__left">Gender</td>
              <td className="table__right">
                {information.gender === "n/a"
                  ? "Doesn't have a gender"
                  : information.gender}
              </td>
            </tr>
            <tr>
              <td className="table__left">Hair color</td>
              <td className="table__right">
                {information.hair_color === "n/a"
                  ? "Doesn't have hair"
                  : information.hair_color}
              </td>
            </tr>
            <tr>
              <td className="table__left">Mass</td>
              <td className="table__right">{information.mass} kg</td>
            </tr>
            <tr>
              <td className="table__left">Height</td>
              <td className="table__right">{information.height} cm</td>
            </tr>
            <tr>
              <td className="table__left">Home world</td>
              <td className="table__right">{planet ? planet.name : "oops"}</td>
            </tr>
          </table>
          <h3 className="title">
            Films in which <span className="active">{information.name}</span>{" "}
            starred
          </h3>
          <FilmList movies={films} />
        </section>
      )}
    </>
  );
}
