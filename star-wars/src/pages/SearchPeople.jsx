import { useState } from "react";
import { Link } from "react-router-dom";
import { SmallLoader } from "../components/Skeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchPeopleByValue } from "../services/apiService";
export default function SearchPeople() {
  const [value, setValue] = useState("");
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchByValue = async (value) => {
    setLoading(true);
    const newPeople = await SearchPeopleByValue(value);
    if (newPeople.length === 0) {
      setLoading(false);
      return toast.warning(
        "👁 We didn't find anything, make sure you have the correct value!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
    setPeople(newPeople);
    console.log(newPeople);
    setLoading(false);
    return toast.success(`Success, we found ${newPeople.length} heroes`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return toast.error("😲 Please enter something", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    fetchByValue(value);
    setValue("");
    e.target.reset();
  };
  return (
    <section className="search">
      <form onSubmit={handleFormSubmit} className="form">
        <label className="form__label">
          Search somebody
          <input
            className="form__input"
            type="text"
            name="search"
            onChange={handleInputChange}
            placeholder="Obi-Wan Kenobi"
          />
        </label>
        <button type="submit" className="button">
          search
        </button>
      </form>
      {loading && <SmallLoader />}
      {people && (
        <ul className="search__list">
          {people.map(({ name, url }) => {
            const id = url.split("/").reverse()[1];
            return (
              <li key={name} className="search__list--item">
                <Link to={`/${name}/${id}`} className="search__list--link">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
