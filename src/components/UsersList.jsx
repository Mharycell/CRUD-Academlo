import React from 'react'

const UsersList = ({ users }) => {
	return (
		<div>
			<h1>All users</h1>
			<ul >
				{users.map((user) => (
					<li className='list' key={user.id}>
						<div className='list-content'>
							<div className='info'>
								<h2>{user.last_name} {user.first_name}</h2>						
								<p>{user.email}</p>
								<i class="fa-regular fa-envelope"></i>
								<p>{user.birthday}</p>
							</div>	

							<div className='btns'>
								<button><i class="fa-solid fa-user-pen"></i></button>	
								<button className='delete'><i class="fa-solid fa-trash"></i></button>
							</div>	
						</div>
						
					</li>
				))}
			</ul>
		</div>
	)
}

export default UsersList
