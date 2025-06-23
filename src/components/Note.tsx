import styled from "styled-components";

interface NoteBoxProps {
  color: string;
}

const NoteBox = styled.div<NoteBoxProps>`
  background-color: ${(props) => props.color};
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  font-size: 1.1rem;
  word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default function Note({ text, color }: { text: string; color: string }) {
  return <NoteBox color={color}>{text}</NoteBox>;
}
