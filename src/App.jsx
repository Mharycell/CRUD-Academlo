import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get("https://users-crud1.herokuapp.com/users/ ")
        .then(res => setUsers(res.data))
  })

  const getUsers= () => {
      axios.get("https://users-crud1.herokuapp.com/users/ ")
        .then(res => setUsers(res.data))
    }
  console.log(users)
  return (
    <div className="App">
      
      <UsersForm getUsers={getUsers}/>
      <UsersList users={users}
       setUsers={setUsers}/>
    </div>
  )
}

export default App

