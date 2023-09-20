const UserCard = ({ userData }) => {
  console.log(userData);

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card p-4" style={{ width: '200px' }}>
        <p>Adı: {userData.name}</p>
        <p>KullanıcıAdı: {userData.username}</p>
        <p>Telefon: {userData.phone}</p>
        <p>Adres: {userData.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
