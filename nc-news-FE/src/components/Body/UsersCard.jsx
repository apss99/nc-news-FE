function UsersCard({ username, name, avatar_url, password }) {
  return (
    <div className="users-card">
      <h2>{username}</h2>
      <p>{name}</p>
      <img src={avatar_url}></img>
    </div>
  );
}

export default UsersCard;
