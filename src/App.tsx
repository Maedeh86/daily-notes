import { useEffect, useState } from "react";
import styled from "styled-components";
import Note from "./components/Note";
import { GlobalStyle } from "./styles/globalstyle";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 90%;
  max-width: 400px;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("notes");
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([note, ...notes]);
      setNote("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Daily Notes</h1>
        <Input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
        <Button onClick={addNote}>Add Note</Button>
        {notes.map((n, i) => (
          <Note key={i} text={n} color="#e0f7fa" />
        ))}
      </Container>
    </>
  );
}

export default App;
