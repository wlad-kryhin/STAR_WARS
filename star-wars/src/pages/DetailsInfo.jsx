import { useParams } from "react-router-dom";
import {
  FetchDetailsInfo,
  FetchHomeWorld,
  FetchFilms,
} from "../services/apiService";
import { useEffect, useState } from "react";
export default function DetailsInfo() {
  const [information, setInformation] = useState(null);
  const [films, setFilms] = useState(null);
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function FetchInfo() {
      const starWarInfo = await FetchDetailsInfo(id);
      const homeWorld = await FetchHomeWorld(starWarInfo.homeworld);
      const films = await FetchFilms(starWarInfo.films);
      setInformation(starWarInfo);
      // setFilms(films);
      // setPlanet(homeWorld);

      const result = await Promise.all([starWarInfo, homeWorld, films]);
      console.log(result);
      return result;
    }
    FetchInfo();
  }, []);

  return (
    <div>
      {information && (
        <>
          <p>{information.name}</p>
          <p>{information.gender}</p>
          <p>{information.hair_color}</p>
          <p>{information.height}</p>
          <p>{information.mass}</p>
          <p>{information.homeworld}</p>
        </>
      )}
    </div>
  );
}
