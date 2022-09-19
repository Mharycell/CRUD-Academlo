import React from 'react';

const UsersList = ({users, setUsers}) => {


    return (
        <div>
            <h1>All users</h1>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>
                        {user.email}
                        {user.password}
                        {user.last_name}
                        {user.first_name}
                        {user.birthday}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;