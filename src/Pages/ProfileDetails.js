import React, { useEffect, useState } from 'react'
import Users from './Users'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const ProfileDetails = () => {
    const {id} = useParams() 

    const [user, setUser] = useState({})
    
    const navigate = useNavigate()
    
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=> setUser(res.data))
      .catch((err)=> console.log(err))
 
     
     }, [id])
     

  
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.email} </Card.Text>
        <Card.Text> {user.phone} </Card.Text>
        <Button onClick={()=> navigate(-1)} variant="primary">Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProfileDetails