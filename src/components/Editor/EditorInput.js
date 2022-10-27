import './EditorInput.css';
import { useContext } from 'react';
import { NotesDispatchContext } from '../../state/notes-context';


export default function EditorInput(props) {
    const dispatch = useContext(NotesDispatchContext);

    function onUpdateNote(note) {
        dispatch({
          type: 'changed',
          note: note
        });
      }

    return (
        <div className="editor-container">
            <input disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.title : ''} onChange={(e) => {onUpdateNote({...props.activeNote, title: e.target.value})}} name="title" className="title-input" type="text" placeholder="Enter title" />
            <textarea disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.content : ''} onChange={(e) => {onUpdateNote({...props.activeNote, content: e.target.value})}} name="content" placeholder="Enter content"></textarea>
        </div>
    )
}