import './Editor.css';
import EditorInput from './EditorInput.js';
import EditorPreview from './EditorPreview.js';
import { useContext } from 'react';
import { NotesContext } from '../../state/notes-context';

export default function Editor(props) {
    const notes = useContext(NotesContext);
    const activeNote = notes.find(note => note.id === props.activeNote);

    return (
        <div className="Editor">
            <EditorInput activeNote={activeNote} />
            <EditorPreview activeNote={activeNote} />
        </div>
    )
}