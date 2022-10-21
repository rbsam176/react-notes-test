import './ListItem.css';

export default function ListItem(props) {
    return (
      <ul>
        <li className={props.activeNote === props.note.id ? 'active' : ''} onClick={() => props.setActiveNote(props.note.id)}>
            <div className="item-content">
                <strong className="title">{props.note.title}</strong>
                <span className="summary">{props.note.content}</span>
                <small>Last modified: {props.note.lastModified}</small>
            </div>
            <button className="delete-note" onClick={() => props.onDeleteNote(props.note.id)}>Delete</button>
        </li>
      </ul>
    );
}