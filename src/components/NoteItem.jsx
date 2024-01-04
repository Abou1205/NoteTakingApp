import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
    <Link to={`edit-note/${note.id}`} className='note'>
        <h3>
            {note.title.length > 20 ? note.title.substr(0,20) + "..." : note.title}
        </h3>
        <h4>{note.date}</h4>
    </Link>
  )
}

export default NoteItem