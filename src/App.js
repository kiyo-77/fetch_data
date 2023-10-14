
import React, { useEffect, useState } from "react"
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://dummyjson.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.users);
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
        <h1>Dummy Data</h1>
        <table border="1">
        <thead>
            <tr>
                <th>Sno</th>
                <th> First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
        </thead>
        <tbody>
            
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
            </tr>
            ))}
    </tbody>      
   </table>
   </div>
  );
}

export default App;