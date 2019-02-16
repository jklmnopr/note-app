import React from "react";
import { render } from "react-dom";
import "./sass/main.scss";
import { NoteEditor, NotesRow } from "./components";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, text: "This is demo note.", color: "red" },
        {
          id: 2,
          text: "Second demo note. Have a good day.",
          color: "blue"
        },
        {
          id: 3,
          text:
            "Super long note. Lorem ipsum dolor sit amet, at mea congue dissentiunt. Duo ex euismod maiorum disputando, ipsum dissentiunt his ei, clita equidem no vel. Ut vix munere everti scribentur, cu mea oblique instructior definitiones, ea appetere ocurreret vel. Eos at mazim omittam convenire, duo ex novum oratio feugait. Vel cibo viderer qualisque an, diam choro at pro",
          color: "green"
        }
      ]
    };
  }

  componentDidMount() {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes) {
      this.setState({ notes: localNotes });
    }
  }

  updateLocalStorage() {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  }

  onNoteAdd(noteText, noteColor) {
    const newNotes = this.state.notes.slice();
    newNotes.unshift({
      id: Date.now(),
      text: noteText,
      color: noteColor
    });
    this.setState({ notes: newNotes });
  }

  onNoteDelete(note) {
    const newNotes = this.state.notes.filter(_note => _note.id != note.id);
    this.setState({ notes: newNotes });
  }

  activateNoteEdit(note) {
    const newNotes = this.state.notes.map(_note => {
      if (_note.id === note.id) {
        note.editing = true;
      }
      return _note;
    });
    this.setState({ notes: newNotes });
  }

  cancelEditNote(note) {
    const newNotes = this.state.notes.map(_note => {
      if (_note.id === note.id) {
        note.editing = false;
      }
      return _note;
    });
    this.setState({ notes: newNotes });
  }

  onNoteUpdate(note, noteText) {
    const newNotes = this.state.notes.map(_note => {
      if (_note.id === note.id) {
        note.text = noteText;
        note.editing = false;
      }
      return _note;
    });
    this.setState({ notes: newNotes });
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  render() {
    return (
      <section className="py-10">
        <div className="container">
          <NoteEditor onNoteAdd={this.onNoteAdd.bind(this)} button="Add note" />
          <NotesRow
            notes={this.state.notes}
            onNoteDelete={this.onNoteDelete.bind(this)}
            onNoteUpdateActivate={this.activateNoteEdit.bind(this)}
            onCancelEditNote={this.cancelEditNote.bind(this)}
            onNoteAdd={this.onNoteUpdate.bind(this)}
          />
        </div>
      </section>
    );
  }
}

render(<NotesApp />, document.getElementById("app"));
