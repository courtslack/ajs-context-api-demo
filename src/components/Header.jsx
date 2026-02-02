import UserMenu from './UserMenu'

const Header = ({ user, setUser }) => {
  return (
    <header className="header">
      <h1>Demo Website</h1>
      <UserMenu user={user} setUser={setUser} />
    </header>
  )
}

export default Header
