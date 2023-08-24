import {Card, Button, CardText, CardTitle} from 'reactstrap';
import EditModal from './EditModal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions/contactActions';

function ContactCard({contact}) {

  const dispatch= useDispatch()
  const delet=()=> {
    dispatch(deleteContact(contact._id))
  }


  return (
    <div style={{minWidth: '300px', margin: '10px'}}>
    <Card
        body
        inverse
        style={{backgroundColor: '#333', borderColor: '#333'}}
      >
        <CardTitle tag="h5"> {contact.name} </CardTitle>
        <CardText>{contact.email} </CardText>
        <CardText>{contact.phone} </CardText>
        <CardText>
        {contact.dateCreation} ---{" "}
          {contact.dateCreation}{" "}
        </CardText>
        <div  style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={delet}>Delete</Button>
          <EditModal contact={contact}/>
        </div>
    </Card>
    </div>
  )
}

export default ContactCard