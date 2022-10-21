import './EditorPreview.css';
import ReactMarkdown from "react-markdown";

export default function EditorPreview(props) {
    return (
        <div className="preview-container">
            <ReactMarkdown>{props.activeNote !== undefined ? props.activeNote.content : ''}</ReactMarkdown>
        </div>
    )
}