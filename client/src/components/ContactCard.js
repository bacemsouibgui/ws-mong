import React from 'react'

function ContactCard({contact}) {
  return (
    <div>
      <h1>{contact.name}</h1>
      <h3>{contact.email}</h3>
      <h5>{contact.phone}</h5>
    </div>
  )
}

export default ContactCard