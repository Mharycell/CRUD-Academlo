import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
import Modal from './components/Modal'
import image from "./assets/scattered-forcefields.svg"


function App() {
	const [users, setUsers] = useState([])
	const [active, setActive] = useState(false)

	const toggle = () => {
		setActive(!active)
	}

	useEffect(() => {
		axios.get('https://users-crud1.herokuapp.com/users/ ').then((res) => setUsers(res.data))
	}, [])

	const getUsers = () => {
		axios.get('https://users-crud1.herokuapp.com/users/ ').then((res) => setUsers(res.data))
	}
	console.log(users)

	document.body.style = `background: #e5c0c0`

	return (
		<div className='App'>
			<div className='header'>
			<button onClick={toggle}>Create User</button>
			<h1></h1>
			</div>
			<Modal active={active} toggle={toggle}>
				<UsersForm getUsers={getUsers} />
			</Modal>
			<UsersList users={users} setUsers={setUsers} />
		</div>
	)
}

export default App
