import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Editor from './components/Editor/Editor.js';
import React, { useEffect, useState, useReducer } from 'react';
import notesReducer from './state/notes-reducer';
import { NotesContext, NotesDispatchContext } from './state/notes-context';


function App() {
  const [notes, dispatch] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => 
    localStorage.setItem('notes', JSON.stringify(notes))
  , [notes])


  return (
    <div className="App">
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <Sidebar activeNote={activeNote} setActiveNote={setActiveNote} />
          <Editor activeNote={activeNote} />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
