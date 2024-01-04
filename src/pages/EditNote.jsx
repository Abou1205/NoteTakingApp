import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import useCreateDate from '../components/UseCreateDate';

const EditNote = ({notes,setNotes}) => {
  const {id} = useParams()
  const note = notes.find((note) => note.id == id)
  const [title,setTitle] = useState(note.title)
  const [details,setDetails] = useState(note.details)
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    if(title && details){
      const newNote = {...note,title,details,date}

      const newNotes = notes.map((item) => {
        if(item.id == id){
          item = newNote
        }
        return item
      })
      setNotes(newNotes)
      
    }
    navigate("/")
  }

  const handleDelete = () => {
    if(window.confirm("Are you sure to delete?")){
      const newNotes = notes.filter((item) => item.id != id)
      setNotes(newNotes)
      navigate("/")
    }
  }

  return (
    <section>
      <header className="create-note-header">
        <Link to={"/"} className="btn">
          <FaArrowLeft />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>Save</button>
        <button className='btn lg delete' onClick={handleDelete}>
          <MdDeleteOutline/>
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  )
}

export default EditNote