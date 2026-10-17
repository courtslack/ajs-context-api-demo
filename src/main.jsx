
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserContext.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'

import App from './App.jsx'
import './index.css'
import { NotificationContext } from './contexts/NotificationContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'

const root = document.querySelector('#root')
//gives app.jsx access to evertything inside the UserProvider context
createRoot(root).render(

        <UserProvider>
                <ThemeProvider>
                        <NotificationProvider>
                                  <App />
                        </NotificationProvider>                        
                </ThemeProvider>                
        </UserProvider>
        
)
