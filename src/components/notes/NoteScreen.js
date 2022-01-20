import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote } from "../../store/actions/notesAction";
import NoteAppBar from "./NoteAppBar";

const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <section className="flex flex-col h-full">
      <NoteAppBar />

      <article className="flex flex-col flex-1 p-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Some awesome idea..."
            className="w-full outline-none | text-md font-semibold text-gray-600"
            autoComplete="off"
            value={title}
            name="title"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-2 flex-1">
          <textarea
            placeholder="What happened today..."
            className="h-full w-full resize-none outline-none | text-sm text-gray-800"
            autoComplete="off"
            value={body}
            name="body"
            onChange={handleInputChange}
          ></textarea>
        </div>
      </article>

      {note.urlImage && (
        <footer className="p-4 | bg-slate-200">
          <figure className="max-w-[128px]">
            <img
              src={note.urlImage}
              alt="imagen"
              className="rounded-md shadow-lg | bg-cover bg-center"
            />
          </figure>
        </footer>
      )}
    </section>
  );
};

export default NoteScreen;
