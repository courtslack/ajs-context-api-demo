import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const NotificationList = () => {

    const { notifications, removeNotification } = useContext(NotificationContext)

    //remove nitification is in the context

    return (

        <div>
            {notifications.map(n => (
                <div  key={n.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }} >
                    <span>{n.message}</span>
                    <button onClick={() => removeNotification(n.id)}>
                        Dismiss
                    </button>
                </div>        
             ))}
        </div>
    )    
}

export default NotificationList