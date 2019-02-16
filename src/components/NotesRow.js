import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function NotesRow({
  onNoteDelete,
  onNoteUpdateActivate,
  onCancelEditNote,
  onNoteAdd,
  notes
}) {
  return (
    <div className="row mt-9">
      {notes.map((note, index, arr) => (
        <div className="col-sm-4 mb-4" key={note.id}>
          <Card
            color={note.color}
            onDelete={onNoteDelete.bind(null, note)}
            onNoteUpdateActivate={onNoteUpdateActivate.bind(null, note)}
            onCancelEditNote={onCancelEditNote.bind(null, note)}
            onNoteAdd={onNoteAdd.bind(null, note)}
            id={note.id}
            count={arr.length - index}
            editing={note.editing}
          >
            {note.text}
          </Card>
        </div>
      ))}
    </div>
  );
}

NotesRow.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onNoteDelete: PropTypes.func.isRequired,
  onNoteUpdateActivate: PropTypes.func.isRequired,
  onCancelEditNote: PropTypes.func.isRequired,
  onNoteAdd: PropTypes.func.isRequired
};

export default NotesRow;
