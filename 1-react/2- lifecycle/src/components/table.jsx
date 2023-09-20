const Table = ({ users }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>isim</th>
          <th>email</th>
          <th>şirket</th>
          <th>adres</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user.id}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
