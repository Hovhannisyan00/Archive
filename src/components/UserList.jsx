import PropTypes from "prop-types";

export const UserList = ({ users, handleDelete, handleUpSelery }) => {
  return (
    <div>
      <h1>UserList</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>salary</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => (
            <tr
              key={elem.id}
              style={{ background: elem.salary > 800000 ? "yellowgreen" : "" }}
            >
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.surname}</td>
              <td>{elem.salary}</td>
              <td id="butt">
                <button onClick={() => handleDelete(elem.id)}>Delete</button>
                <button onClick={() => handleUpSelery(elem.id)}>
                  UP Selery
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
