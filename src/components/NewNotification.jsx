
import { useContext, useState } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const NewNotification = () => {

    const { addNotification } = useContext(NotificationContext)

    const [ message, setMessage ] = useState('')

    return(
        <div>
            <input 
            value={message}
               onChange={(event) => setMessage(event.target.value)}
            />      

            <button 
                onClick={() => {
                    addNotification(message)
                    setMessage('')
                }}              
            >
                Add Notification 
            </button>
        </div>
    )
}

export default NewNotification