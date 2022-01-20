import { db, collection, getDocs } from "../firebase/fireBaseConfig";

export const getLoadNotes = async (uid) => {
  const querySnapshot = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = [];

  querySnapshot.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return notes;
};
