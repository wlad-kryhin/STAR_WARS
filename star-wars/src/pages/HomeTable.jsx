import { Link } from "react-router-dom";
export const HomeTable = ({ people }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__tr">
          <td className="table__image up"></td>
          <td className="table__name up">Name</td>
          <td className="table__sum up">Films sum</td>
        </tr>
      </thead>
      <tbody>
        {people &&
          people.map(({ name, url, films }) => {
            const id = url.split("/").reverse()[1];
            return (
              <tr key={name} className="table__tr">
                <td className="table__image">
                  <img
                    src="https://images3.alphacoders.com/114/thumb-1920-11439.png"
                    alt=""
                  />
                </td>
                <td className="table__name">
                  <Link to={`/${name}/${id}`} className="table__name">
                    {name}
                  </Link>
                </td>
                <td className="table__sum">{films.length}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
