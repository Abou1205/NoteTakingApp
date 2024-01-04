import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { v4 as uuid} from "uuid";
import useCreateDate from "../components/UseCreateDate"

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title && details){
      const note = {
        id: uuid(),
        title,
        details,
        date
      }

      setNotes((prevNotes) => [note,...prevNotes])
      navigate("/")
    }
  }

  return (
    <section>
      <header className="create-note-header">
        <Link to={"/"} className="btn">
          <FaArrowLeft />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit} >Save</button>
      </header>
      <form className="create-note-form">
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
