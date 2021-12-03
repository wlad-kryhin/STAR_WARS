import { Link } from "react-router-dom";
export const Table = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Star Wars</td>
          <td>Name</td>
          <td>Films sum</td>
        </tr>
      </thead>
      {people.map(({ name, url, films }) => {
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
  );
};
