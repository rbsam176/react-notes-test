import './Sidebar.css';
import ListItem from './ListItem.js';
import uuid from "react-uuid";
import { useContext } from 'react';
import { NotesContext, NotesDispatchContext } from '../../state/notes-context';

export default function Sidebar(props) {
  const dispatch = useContext(NotesDispatchContext);
  const notes = useContext(NotesContext);

  function onAddNote() {
    const id = uuid()
    dispatch({
      type: 'added',
      id: id
    });
    props.setActiveNote(id)
  }

  return (
    <div className="Sidebar">
        <header>
            <h1>Notes</h1>
            <button className="new-note" onClick={onAddNote}>New Note</button>
        </header>
        {notes.map(note => {
          return <ListItem key={note.id} note={note} activeNote={props.activeNote} setActiveNote={props.setActiveNote} />
        })}
    </div>
  );
}