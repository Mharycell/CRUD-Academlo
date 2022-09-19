import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
import Modal from './components/Modal'

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
	return (
		<div className='App'>
			<button onClick={toggle}>Add User</button>
			<Modal active={active} toggle={toggle}>
				<UsersForm getUsers={getUsers} />
			</Modal>
			<UsersList users={users} setUsers={setUsers} />
		</div>
	)
}

export default App
