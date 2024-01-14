import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const Userlist = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then((res)=> setUsers(res.data))
     .catch((err)=> console.log(err))

    
    }, [])
    
  return (
 <div style={{display:'flex' , justifyContent:'space-between' , flexWrap:'wrap' , marginTop:'36px',marginLeft:'10px', marginRight:'10px'}}>
 {users.map((user)=> <UserCard user={user} key={user.id} />)}
    </div>
  )
}

export default Userlist