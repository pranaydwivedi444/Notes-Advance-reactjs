import React, { useContext } from "react";
import { NotesContext } from "../../Contexts/Notes.context";
import "./searchbox.styles.css";

function Searchbox() {
  const { noteState, setNoteState, initialNotes } = useContext(NotesContext);
  function searchResults(e) {
    const searchvalue = e.target.value.toLowerCase();
    const results = initialNotes.filter((note) =>
      note.text.toLowerCase().includes(searchvalue)
    );
    setNoteState(results);
  }
  return (
    <div className="searchbox-container">
      <img src="https://img.icons8.com/dotty/24/null/search.png" />
      <input
        type="text"
        name="search-box"
        id="searchbox"
        placeholder="enter your keywords here"
        onChange={searchResults}
      />
    </div>
  );
}

export default Searchbox;
