import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import NoteItem from '../components/NoteItem';
import { Link } from 'react-router-dom';
const Notes = ({notes}) => {

  const [showSearch,setShowSearch] = useState(false)
  const [text,setText] = useState("")
  const [filteredNotes,setFilteredNotes] = useState(notes)

  const handleSearch = () => {
    setFilteredNotes(
        notes.filter((note) => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note
            }
        })
    )
  }

  useEffect(handleSearch,[text])

  return (
    <section className='container'>
        <header className='note-header'>
            {!showSearch && <h2>My Notes</h2>}
            {showSearch && (
                 <input type="text" placeholder='Enter the word you are searching' onChange={(e) => {setText(e.target.value); handleSearch()}}/>
            )}
            <button className='btn' onClick={() => setShowSearch((prevState) => !prevState)}>
                {showSearch ? <IoCloseSharp/> : <IoSearch />}
            </button>
        </header>
        <div className="note-container">
            {filteredNotes.length == 0 && (<p className='empty-note'>Do you want to add note?</p>)}
            {filteredNotes.map((note) => (<NoteItem note={note} key={note.id} />))}
        </div>

        <Link className='btn add-btn' to="create-note">
            <FaPlus/>
        </Link>
    </section>
  )
}

export default Notes