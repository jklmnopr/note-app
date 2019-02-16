import React from "react";
import PropTypes from "prop-types";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="Edit">
        <div className="input-group my-3">
          <div className="input-group-prepend">
            <span
              onClick={() => this.props.onCancelEditNote()}
              className="cursor-pointer input-group-text"
            >
              x
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            autoFocus={true}
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => this.props.onNoteAdd(this.state.text)}
            >
              Update note
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
  onCancelEditNote: PropTypes.func.isRequired
};

export default Edit;
