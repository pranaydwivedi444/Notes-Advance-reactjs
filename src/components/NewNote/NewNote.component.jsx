import "./NewNote.styles.css";
import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { NotesContext } from "../../Contexts/Notes.context";
const charcterLimit = 200;
function NewNote() {
  const { setNoteState } = useContext(NotesContext);
  const [noteText, setNoteText] = useState("");
  function newNote(e) {
    // console.log(e.target.value);
    setNoteText(e.target.value);
  }
  function saveNote(e) {
    e.preventDefault();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: new Date().toDateString(),
    };
    setNoteState((prev) => [newNote, ...prev]);
    setNoteText("");
  }
  return (
    <div className="new ">
      <form onSubmit={saveNote}>
        <textarea
          className="textField"
          name="new_notes"
          placeholder="Type Your new note"
          cols="31"
          rows="10"
          maxLength={`${charcterLimit}`}
          minLength="2"
          required
          onChange={newNote}
          value={noteText}
        ></textarea>
        <div className="note-footer">
          <span>{charcterLimit - noteText.length}</span>
          <button className="btn save" type="submit">
            <img src="https://img.icons8.com/ios-glyphs/25/null/save--v1.png" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewNote;
