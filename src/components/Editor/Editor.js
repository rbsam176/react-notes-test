import './Editor.css';
import EditorInput from './EditorInput.js';
import EditorPreview from './EditorPreview.js';

export default function Editor(props) {
    const activeNote = props.notes.find(note => note.id === props.activeNote);
    return (
        <div className="Editor">
            <EditorInput onUpdateNote={props.onUpdateNote} activeNote={activeNote} />
            <EditorPreview activeNote={activeNote} />
        </div>
    )
}