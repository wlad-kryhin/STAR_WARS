export const DetailsInfoTable = ({ information, planet }) => {
  return (
    <table className="table__info">
      <thead>
        <tr>
          <td className="table__left">Name</td>
          <td className="table__right">{information.name}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table__left">Gender</td>
          <td className="table__right">
            {information.gender === "n/a"
              ? "Doesn't have a gender"
              : information.gender}
          </td>
        </tr>
        <tr>
          <td className="table__left">Hair color</td>
          <td className="table__right">
            {information.hair_color === "n/a"
              ? "Doesn't have hair"
              : information.hair_color}
          </td>
        </tr>
        <tr>
          <td className="table__left">Mass</td>
          <td className="table__right">{information.mass} kg</td>
        </tr>
        <tr>
          <td className="table__left">Height</td>
          <td className="table__right">{information.height} cm</td>
        </tr>
        <tr>
          <td className="table__left">Home world</td>
          <td className="table__right">{planet ? planet.name : "oops"}</td>
        </tr>
      </tbody>
    </table>
  );
};
