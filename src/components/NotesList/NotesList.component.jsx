import { useContext } from "react";
import { NotesContext } from "../../Contexts/Notes.context";
import NewNote from "../NewNote/NewNote.component";
import Note from "../Note/Note.component";
import "./NotesList.styles.css";
function NotesList() {
  const { noteState } = useContext(NotesContext);
  return (
    <div className="notelist-container">
      {noteState.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
      <NewNote />
    </div>
  );
}

export default NotesList;
