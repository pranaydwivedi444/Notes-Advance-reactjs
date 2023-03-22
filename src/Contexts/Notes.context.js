import { nanoid } from "nanoid";
import { useState } from "react";
import { createContext } from "react";

export const NotesContext = createContext({
  noteState: [],

  setNoteState: () => null,
});

export const NotesStateProvider = (props) => {
  const notes = [
    {
      id: nanoid(),
      text: "Running 5 km and grocery",

      date: new Date(2020, 7, 14).toDateString(),
    },
    {
      id: nanoid(),
      text: "BUY New TV LG SMASON 882",
      date: new Date(2021, 2, 12).toDateString(),
    },
    {
      id: nanoid(),
      text: "Need to Car Insurance lorem23 car mercedes benz sfsaf sdfjsafjknasg sd",

      date: new Date(2021, 2, 28).toDateString(),
    },
    {
      id: nanoid(),
      text: "BUY New Desk (Wooden)",

      date: new Date(2021, 5, 12).toDateString(),
    },
  ];
  const [noteState, setNoteState] = useState(notes);

  const value = { noteState, setNoteState, initialNotes: notes };
  return (
    <NotesContext.Provider value={value}>
      {props.children}
    </NotesContext.Provider>
  );
};
