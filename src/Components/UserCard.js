
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {

    const navigate= useNavigate()
    
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.email} </Card.Text>
        <Card.Text> {user.phone} </Card.Text>
        <Button onClick={()=> navigate(`/user/${user.id}`)} variant="primary">Profile</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard