import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Editor from './components/Editor/Editor.js';
import React, { useEffect, useState, useReducer } from 'react';
import notesReducer from './state/notes-reducer';
import uuid from "react-uuid";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(false);

  function onAddNote() {
    const id = uuid()
    dispatch({
      type: 'added',
      id: id
    });
    setActiveNote(id)
  }

  function onDeleteNote(id) {
    dispatch({
      type: 'deleted',
      id: id,
    });
    setActiveNote(false)
  }

  function onUpdateNote(note) {
    dispatch({
      type: 'changed',
      note: note
    });
  }

  useEffect(() => 
    localStorage.setItem('notes', JSON.stringify(notes))
  , [notes])


  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} onDeleteNote={onDeleteNote} />
      <Editor activeNote={activeNote} notes={notes} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
