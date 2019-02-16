import React from "react";
import PropTypes from "prop-types";

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.color = "red";
    this.state = { text: "", color: this.color };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleChangeColor(e) {
    this.setState({ color: e.target.value });
  }

  render() {
    return (
      <div className="NoteAdd">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="form-group">
              <label>Note text</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add note"
                onChange={this.handleChange.bind(this)}
                value={this.state.text}
              />
            </div>
            <div className="form-group">
              <label>Note color</label>
              <select
                className="form-control"
                value={this.state.color}
                onChange={this.handleChangeColor.bind(this)}
              >
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Purple</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary text-uppercase"
                onClick={() =>
                  this.props.onNoteAdd(this.state.text, this.state.color)
                }
              >
                {this.props.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired
};

export default NoteEditor;
