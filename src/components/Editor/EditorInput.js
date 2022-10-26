import './EditorInput.css';
export default function EditorInput(props) {

    return (
        <div className="editor-container">
            <input disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.title : ''} onChange={(e) => {props.onUpdateNote({...props.activeNote, title: e.target.value})}} name="title" className="title-input" type="text" placeholder="Enter title" />
            <textarea disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.content : ''} onChange={(e) => {props.onUpdateNote({...props.activeNote, content: e.target.value})}} name="content" placeholder="Enter content"></textarea>
        </div>
    )
}