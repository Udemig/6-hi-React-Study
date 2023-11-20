import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import CreateNote from "./components/Form/CreateNote";
import EditNote from "./components/Form/EditNote";
import { Note, NoteData, RawNote, Tag } from "./types";
import { useLocaleStorage } from "./useLocaleStorage";
import { v4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocaleStorage<Tag[]>("tags", []);

  // yeni note oluşturur
  const addNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...data,
          id: v4(),
          // elemanın etiketlerini dön idlerini diziye aktar
          tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  };

  const createTag = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Anasayfa</h1>} />

        <Route path="/new" element={<CreateNote onSubmit={addNote} />} />

        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<EditNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
