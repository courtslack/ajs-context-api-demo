//import context API
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const UserProfile = ( ) => {

  const { user, setUser } = useContext(UserContext) //Use Context API

  const updateName = newName => {
    setUser({ ...user, name: newName }) //Changing name value data  
  }

  return (
    <div className="user-profile">
      <div className="avatar">{user.name[0]}</div>
      <h3>Hello, {user.name}!</h3>
      <button onClick={() => updateName('Jane')}> 
          Change Name
      </button>
    </div>
  )
}

export default UserProfile
