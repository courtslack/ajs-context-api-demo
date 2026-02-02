import UserProfile from './UserProfile'

const Sidebar = ({ user, setUser }) => {
  return (
    <aside className="sidebar">
      <UserProfile user={user} setUser={setUser} />
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
