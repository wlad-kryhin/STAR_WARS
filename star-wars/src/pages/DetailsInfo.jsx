import { useParams } from "react-router-dom";
import {
  FetchDetailsInfo,
  FetchHomeWorld,
  FetchFilms,
} from "../services/apiService";
import { SmallLoader } from "../components/Skeleton";
import { useEffect, useState } from "react";
import { FilmList } from "../components/FilmsList";
import { DetailsInfoTable } from "./DetailsInfoTable";
import { Title } from "./Title";
export default function DetailsInfo() {
  const [information, setInformation] = useState(null);
  const [films, setFilms] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    FetchInfo();
  }, []);

  const FetchInfo = async () => {
    setLoading(true);
    const starWarInfo = await FetchDetailsInfo(id);
    const homeWorld = await FetchHomeWorld(starWarInfo.homeworld);
    const movies = await FetchFilms(starWarInfo.films);

    // const result = await Promise.all([starWarInfo, homeWorld, movies]);

    setInformation(starWarInfo);
    setPlanet(homeWorld);
    setFilms(movies);
    setLoading(false);
  };

  return (
    <>
      {loading && <SmallLoader />}
      {information && (
        <section className="information">
          <Title text={"Details information about"} information={information} />
          <DetailsInfoTable information={information} planet={planet} />
          <Title text={" Films in which starred"} information={information} />
          <FilmList movies={films} />
        </section>
      )}
    </>
  );
}
