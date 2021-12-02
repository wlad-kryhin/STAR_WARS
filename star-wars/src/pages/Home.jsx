import { useState, useEffect } from "react";
import { FetchPeopleStarWars } from "../services/apiService";
import { Link } from "react-router-dom";
export default function Home() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPeople() {
      const newPeople = await FetchPeopleStarWars(page);
      setPeople((prevState) => [...prevState, ...newPeople]);
    }
    fetchPeople();
  }, [page]);

  return (
    <>
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
