import { useState } from 'react'
import Layout from './components/Layout'
import './App.css'

const App = () => {
	const [user, setUser] = useState({ name: 'Ryan' })

	return <Layout user={user} setUser={setUser} />
}

export default App
