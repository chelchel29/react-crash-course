import type { Note } from "../types/indes";

const STORAGE_KEY = "cardnotes_data";

export const getNotes = (): Note[] => {
  const notes = localStorage.getItem(STORAGE_KEY);
  return notes ? JSON.parse(notes) : [];
};

export const getNote = (id: string): Note | null => {
  const notes = getNotes();
  return notes.find((note) => note.id === id) || null;
};

export const saveNote = (note: Omit<Note, "id" | "createdAt">): Note => {
  const notes = getNotes();
  const newNote: Note = {
    ...note,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...notes, newNote]));
  return newNote;
};
