import { useCallback, useState } from "react";
import { SearchPeopleByValue } from "../services/apiService";
export default function SearchPeople() {
  const [value, setValue] = useState("");
  const [people, setPeople] = useState(null);

  const fetchByValue = useCallback(async (value) => {
    const people = await SearchPeopleByValue(value);
    setPeople(people);
  });
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchByValue(value);
    console.log(people);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Search somebody
        <input type="text" name="search" onChange={handleInputChange} />
      </label>
      <button type="submit">search..</button>
    </form>
  );
}
