import './EditorInput.css';
export default function EditorInput(props) {

    function handleChange(e) {
        props.setNotes(prevNotes => {
            return prevNotes.map(note => {
                if (note.id === props.activeNote.id) {
                    return {
                        ...note,
                        [e.target.name]: e.target.value,
                        lastModified: Date.now()
                    }
                }
                return note
            })
        })
    }

    return (
        <div className="editor-container">
            <input disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.title : ''} onChange={handleChange} name="title" className="title-input" type="text" placeholder="Enter title" />
            <textarea disabled={!props.activeNote} value={props.activeNote !== undefined ? props.activeNote.content : ''} onChange={handleChange} name="content" placeholder="Enter content"></textarea>
        </div>
    )
}