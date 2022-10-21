import './Sidebar.css';
import ListItem from './ListItem.js';

export default function Sidebar(props) {

  return (
    <div className="Sidebar">
        <header>
            <h1>Notes</h1>
            <button className="new-note" onClick={props.onAddNote}>New Note</button>
        </header>
        {props.notes.map(note => {
          return <ListItem key={note.id} note={note} activeNote={props.activeNote} setActiveNote={props.setActiveNote} onDeleteNote={props.onDeleteNote} />
        })}
    </div>
  );
}