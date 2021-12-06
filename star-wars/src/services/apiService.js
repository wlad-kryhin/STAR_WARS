import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = "https://swapi.dev/api/";

export const FetchPeopleStarWars = async (page) => {
  try {
    const params = `people/?page=${page}`;
    const fetchUrl = BASE_URL + params;

    const { data } = await axios.get(fetchUrl);
    const { results } = data;
    return results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const FetchDetailsInfo = async (number) => {
  try {
    const params = `people/${number}`;
    const fetchUrl = BASE_URL + params;

    const { data } = await axios.get(fetchUrl);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const FetchHomeWorld = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    alert(error.message);
  }
};
export const FetchFilms = async (array) => {
  try {
    let result = [];
    for (const element of array) {
      const { data } = await axios.get(element);
      result.push(data);
    }
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const FetchAllInfo = async (
//   promiseFirst,
//   promiseSecond,
//   promiseThird,
// ) => {
//   const result = await Promise.all([promiseFirst, promiseSecond, promiseThird]);
//   return result;
// };

export const SearchPeopleByValue = async (value) => {
  try {
    const params = `people/?search=${value}`;
    const fetchUrl = BASE_URL + params;

    const { data } = await axios.get(fetchUrl);
    const { results } = data;
    return results;
  } catch (error) {
    toast.error(error.message);
  }
};
