import { useContext, useEffect } from "react";
import Header from "./components/Header/Header.component";
import NotesList from "./components/NotesList/NotesList.component";
import Searchbox from "./components/searchbox/searchbox.component";
import { NotesContext } from "./Contexts/Notes.context";

function App() {
  const { initialNotes } = useContext(NotesContext);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(initialNotes));
  }, [initialNotes]);
  return (
    <div>
      <Header />
      <Searchbox />
      <NotesList />
    </div>
  );
}

export default App;
