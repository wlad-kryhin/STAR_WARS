import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchPeopleByValue } from "../services/apiService";
export default function SearchPeople() {
  const [value, setValue] = useState("");
  const [people, setPeople] = useState(null);

  const fetchByValue = async (value) => {
    const newPeople = await SearchPeopleByValue(value);
    setPeople(newPeople);
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchByValue(value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Search somebody
        <input type="text" name="search" onChange={handleInputChange} />
      </label>
      <button type="submit">search..</button>
      {people &&
        people.map(({ name, url, films }) => {
          const id = url.split("/").reverse()[1];
          return (
            <li>
              <Link to={`/${name}/${id}`}>{name}</Link>
            </li>
          );
        })}
    </form>
  );
}
