export default function notesReducer(notes, action) {
    switch (action.type) {

      case 'added': {
        return [
            ...notes,
            {
                'id': action.id,
                'title': 'New note',
                'content': 'Enter content',
                'lastModified': Date.now()
            },
        ];
      }

      case 'changed': {
        return notes.map((note) => {
            if (note.id === action.note.id) {
                return action.note;
            } else {
                return note;
            }
        });
      }

      case 'deleted': {
        return notes.filter((note) => note.id !== action.id);
      }

      default: {
        throw Error('Unknown action: ' + action.type);
      }

    }
  }