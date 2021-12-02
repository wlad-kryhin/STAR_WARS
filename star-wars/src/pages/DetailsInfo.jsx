import { useParams } from "react-router-dom";
import { FetchDetailsInfo } from "../services/apiService";
import { useEffect, useState } from "react";
export default function DetailsInfo() {
  const [information, setInformation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function FetchInfo() {
      const starWarInfo = await FetchDetailsInfo(id);
      setInformation(starWarInfo);
    }
    console.log(information);
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
