import axios from 'axios'
import React from 'react'

const UsersList = ({ users, toggle, selectUser, getUsers }) => {
	const deleteUser = (id) => {
		axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(() => getUsers())
	}
	return (
		<div>
			<h1>All users</h1>
			<ul>
				{users.map((user) => (
					<li className='list' key={user.id}>
						<div className='list-content'>
							<div className='info'>
								<h2>
									{user.last_name} {user.first_name}
								</h2>
								<p>{user.email}</p>
								<i class="fa-regular fa-envelope"></i>
								<p>{user.birthday}</p>
							</div>

							<div className='btns'>
								<button onClick={() => selectUser(user)}>
									<i className='fa-solid fa-user-pen'></i>
								</button>
								<button className='delete' onClick={() => deleteUser(user.id)}>
									<i className='fa-solid fa-trash'></i>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UsersList
