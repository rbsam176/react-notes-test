import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Editor from './components/Editor/Editor.js';
import uuid from "react-uuid";
import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(false);

  // test
  function onAddNote() {
    const id = uuid()
    setNotes(prevNotes => {
      return [...prevNotes, {
          'id': id,
          'title': 'New note',
          'content': 'Enter content',
          'lastModified': Date.now()
      }]
    })
    setActiveNote(id)
  }

  function onDeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
    setActiveNote(false)
  }

  useEffect(() => 
    localStorage.setItem('notes', JSON.stringify(notes))
  , [notes])


  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} onDeleteNote={onDeleteNote} />
      <Editor activeNote={activeNote} notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
