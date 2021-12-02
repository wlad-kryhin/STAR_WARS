import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

export const FetchPeopleStarWars = async (page) => {
  const params = `people/?page=${page}`;
  const fetchUrl = BASE_URL + params;

  const { data } = await axios.get(fetchUrl);
  const { results } = data;
  return results;
};

export const FetchDetailsInfo = async (number) => {
  const params = `people/${number}`;
  const fetchUrl = BASE_URL + params;

  const { data } = await axios.get(fetchUrl);
  return data;
};

export const SearchPeopleByValue = async (value) => {
  const params = `people/?search=${value}`;
  const fetchUrl = BASE_URL + params;

  const { data } = await axios.get(fetchUrl);
  const { results } = data;
  return results;
};
