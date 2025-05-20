import { useState } from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = () => {
    onEdit(note._id, editedNote);
    setEditing(false);
  };

  return (
    <div className="note-card">
      <style>
        {`
          .note-card {
            background-color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
            position: relative;
            transition: box-shadow 0.3s ease;
          }
          .note-card:hover {
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .note-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .note-content {
            color: #4a5568;
          }
          .button-group {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            display: none;
            gap: 0.5rem;
          }
          .note-card:hover .button-group {
            display: flex;
          }
          .edit-button {
            color: #3b82f6;
            font-size: 0.875rem;
          }
          .edit-button:hover {
            text-decoration: underline;
          }
          .delete-button {
            color: #ef4444;
            font-size: 0.875rem;
          }
          .delete-button:hover {
            text-decoration: underline;
          }
          .edit-form {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .input-field {
            width: 100%;
            border: 1px solid #e2e8f0;
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
          }
          .button-container {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
          }
          .cancel-button {
            color: #6b7280;
            font-size: 0.875rem;
          }
          .cancel-button:hover {
            text-decoration: underline;
          }
          .save-button {
            color: #059669;
            font-weight: 500;
            font-size: 0.875rem;
          }
          .save-button:hover {
            text-decoration: underline;
          }
        `}
      </style>
      {!editing ? (
        <>
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
          <div className="button-group">
            <button
              onClick={() => setEditing(true)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <input
            type="text"
            className="input-field"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <textarea
            className="input-field"
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
          />
          <div className="button-container">
            <button
              onClick={() => setEditing(false)}
              className="cancel-button"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="save-button"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
