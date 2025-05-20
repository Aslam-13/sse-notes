import { useEffect, useState } from "react";
import API from "../utils/api";
import NoteCard from "../components/NoteCard";
import { useAuth } from "../context/AuthContext";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/notes", form);
      setNotes([res.data, ...notes]);
      setForm({ title: "", content: "" });
    } catch (err) {
      setError(err.response?.data?.msg || "Error creating note");
    }
  };

  const handleEdit = async (id, updatedData) => {
  try {
    const res = await API.put(`/notes/${id}`, updatedData);
    setNotes(
      notes.map((note) =>
        note._id === id ? { ...note, ...res.data } : note
      )
    );
    } catch (err) {
      alert(`Failed to update note: ${err.response?.data?.msg || "Error updating note"}`);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/notes/${id}`);
    setNotes(notes.filter((n) => n._id !== id));
  };

  return (
    <>
      <style>
        {`
          .notes-container {
            min-height: 100vh;
            background-color: #f3f4f6;
            padding: 1.5rem;
          }
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          .page-title {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .logout-button {
            background-color: #ef4444;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 0.25rem;
          }
          .logout-button:hover {
            background-color: #dc2626;
          }
          .form-container {
            margin-bottom: 1.5rem;
            margin-right: 0.5rem;
          }
          .form-container > * {
            margin-bottom: 0.75rem;
          }
          .error-message {
            color: #ef4444;
            font-size: 0.875rem;
          }
          .input-field {
            width: 100%;
            border: 1px solid #e5e7eb;
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
          }
          .create-button {
            background-color: #3b82f6;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            display: flex;
          }
          .create-button:hover {
            background-color: #2563eb;
          }
          .notes-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          @media (min-width: 768px) {
            .notes-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>

      <div className="notes-container">
        <div className="header-container">
          <h2 className="page-title">Shiv Software Note taker</h2>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>

        <form onSubmit={handleCreate} className="form-container">
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="input-field"
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="input-field"
          />
          <button className="create-button">
            Create Note
          </button>
        </form>

        <div className="notes-grid">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
