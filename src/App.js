import React, { useEffect, useState } from "react";
import "./App.css";
import { getNotes } from "./controllers/frontControllers";
import AtomicDesign from "./front/AtomicDesign";
import Notes from "./front/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes()
      .then((n) => setNotes(n))
      .catch((e) => console.error(e)); 
  }, []);
  return (
    <div className="App">
      <h1>Bienvenido a la aplicación de notas</h1>
      <Notes notes={notes} />
      <hr />
      <AtomicDesign />
    </div>
  );
}

export default App;
