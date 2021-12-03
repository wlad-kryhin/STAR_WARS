import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";
import { FetchPeopleStarWars } from "../services/apiService";
import { Link } from "react-router-dom";

const images = [
  "https://i.pinimg.com/474x/24/fc/53/24fc531e8033e13de999eb017e74a62d.jpg",
  "https://s1.1zoom.me/big0/958/Clone_trooper_Star_Wars_Movies_Helmet_518354_1280x720.jpg",
  "https://api.kinoart.ru/storage/post/675/regular_detail_picture-cb122a7b29a308863128ee8e02d0bdb4.jpg",
  "https://images3.alphacoders.com/114/thumb-1920-11439.png",
  "https://icdn.lenta.ru/images/2017/12/14/18/20171214185724933/detail_62e511d5ee11fb831f47c49eafd8bc81.jpg",
];

const randomImage = (images) => {
  return Math.floor(Math.random() * images);
};

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
    }
    fetchPeople();
  }, [page]);
  return (
    <>
      <h1>STAR WARS HEROS</h1>
      {loading && <Skeleton />}
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Films sum</td>
          </tr>
        </thead>
        {people &&
          people.map(({ name, url, films }) => {
            const id = url.split("/").reverse()[1];
            return (
              <tr key={name}>
                <td>
                  <Link to={`/${name}/${id}`}>{name}</Link>
                </td>
                <td>{films.length}</td>
              </tr>
            );
          })}
      </table>
      <button type="button" onClick={() => setPage(page + 1)}>
        More...
      </button>
    </>
  );
}
