import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteNote,
  startSaveNote,
  startUploadingPicture,
} from "../../store/actions/notesAction";

const NoteAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };

  const handleActivePicture = () => {
    document.querySelector("#selectorFilePicture").click();
  };

  const handleChangeFilePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadingPicture(file));
    }
  };

  const handleDeleteNote = () => {
    dispatch(startDeleteNote(note.id));
  };

  return (
    <header className="flex items-center py-2 px-4 | bg-violet-400">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 | text-white font-semibold text-xs">
          <span>28,</span>
          <span>August</span>
          <span>2020</span>
        </div>
        <div className="flex gap-2">
          <input
            id="selectorFilePicture"
            name="file"
            type="file"
            className="hidden"
            onChange={handleChangeFilePicture}
          />
          <button
            className="py-1 px-4 | rounded-md text-xs transition duration-300 | bg-red-400 text-red-800 | hover:text-white"
            onClick={handleDeleteNote}
          >
            Delete
          </button>
          <button
            className="py-1 px-4 | rounded-md text-xs transition duration-300 | bg-violet-600 text-violet-800 | hover:text-white"
            onClick={handleActivePicture}
          >
            Picture
          </button>
          <button
            className="py-1 px-4 | rounded-md text-xs transition duration-300 | bg-violet-900 text-violet-600 | hover:text-white"
            onClick={handleSaveNote}
          >
            Save
          </button>
        </div>
      </div>
    </header>
  );
};

export default NoteAppBar;
