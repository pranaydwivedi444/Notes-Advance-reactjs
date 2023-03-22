import React, { useContext } from "react";
import { NotesContext } from "../../Contexts/Notes.context";
import "./Note.styles.css";
export default function Note({ text, date, id }) {
  const { noteState, setNoteState } = useContext(NotesContext);
  function deleteNote(e) {
    const newNotesList = noteState.filter((note) => note.id != id);

    setNoteState(newNotesList);
  }
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <span>{date}</span>

        <img
          onClick={deleteNote}
          src="https://img.icons8.com/material-outlined/24/null/delete-property.png"
        />
      </div>
    </div>
  );
}
