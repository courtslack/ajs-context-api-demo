const UserProfile = ({ user, setUser }) => {
  return (
    <div className="user-profile">
      <div className="avatar">{user.name[0]}</div>
      <h3>Hello, {user.name}!</h3>
    </div>
  )
}

export default UserProfile
