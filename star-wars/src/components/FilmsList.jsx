export const FilmList = ({ movies }) => {
  const newData = (data) => {
    const date = new Date(data).toDateString();
    return date;
  };
  return (
    <ul className="film__list">
      {movies &&
        movies.map(
          ({ title, opening_crawl, director, producer, release_date }) => {
            return (
              <li key={title} className="film__list--item">
                <p className="film__list--description">
                  <span className="active">Title film:</span>
                  {title}
                </p>
                <p className="film__list--description">
                  <span className="active">Short description:</span>{" "}
                  {opening_crawl}
                </p>
                <p className="film__list--description">
                  <span className="active">Director:</span>
                  {director}
                </p>
                <p className="film__list--description">
                  <span className="active">Producer:</span>
                  {producer}
                </p>
                <p className="film__list--description">
                  <span className="active">Release date:</span>
                  {newData(release_date)}
                </p>
              </li>
            );
          },
        )}
    </ul>
  );
};
