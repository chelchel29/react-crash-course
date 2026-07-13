import { redirect, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { getNote } from "../utils/stroage";
import type { Note } from "../types/indes";
import { useEffect } from "react";

export const NoteDetailLoader = ({ params }: LoaderFunctionArgs) => {
  if (!params.id) throw redirect("/");

  const note = getNote(params.id);
  if (!note) return redirect("/");

  return note;
};

function NoteDetail() {
  const note = useLoaderData() as Note;

  useEffect(() => {
    document.title = "CardNotes | ${note.title}";
    return () => {
      document.title = "CardNotes.";
    };
  }, [note.title]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p className="text-sm tex-xzinc-500">
        Created: {new Date(note.createdAt).toLocaleDateString()}
      </p>
      <p className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl leading-relaxed whitespace-pre-warp">
        {note.content}
      </p>
    </div>
  );
}

export default NoteDetail;
