import { useNavigate } from "react-router-dom";

function UserTable({ users, setSortConfig, sortConfig }) {
  const navigate = useNavigate();

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name ⬍</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => handleSort("company")}>Company ⬍</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
