import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
import Modal from './components/Modal'
import image from './assets/scattered-forcefields.svg'

function App() {
	const [users, setUsers] = useState([])
	const [active, setActive] = useState(false)
	const [editSelected, setEditSelected] = useState(null)

	useEffect(() => {
		axios.get('https://users-crud1.herokuapp.com/users/').then((res) => setUsers(res.data))
	}, [])

	const getUsers = () => {
		axios.get('https://users-crud1.herokuapp.com/users/').then((res) => setUsers(res.data))
	}

	const selectUser = (user) => {
		setEditSelected(user)
		toggle()
	}

	const toggle = () => {
		setActive(!active)
	}

	document.body.style = `background: #e5c0c0`

	return (
		<div className='App'>
			<div className='header'>
				<button onClick={toggle}>Create User</button>
				<span></span>
			</div>
			<Modal active={active} toggle={toggle}>
				<UsersForm getUsers={getUsers} toggle={toggle} editSelected={editSelected} />
			</Modal>
			<UsersList users={users} selectUser={selectUser} toggle={toggle} getUsers={getUsers} />
		</div>
	)
}

export default App
