import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import images from "../img/*.svg";
import Edit from "./Edit";

function Card({
  children,
  onDelete,
  onNoteUpdateActivate,
  onCancelEditNote,
  onNoteAdd,
  count,
  color,
  className,
  id,
  editing
}) {
  return (
    <div
      className={cx(
        "Card d-flex flex-column h-100",
        className,
        `Card--${color.toLowerCase()}`
      )}
    >
      <div className="Card__body p-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="Card__title mb-0 h4">Note-{count}</h3>
          <div className="d-flex">
            <div className="Card__controls d-flex mr-2" onClick={onDelete}>
              <img src={images.trash} alt="trash" />
            </div>
            <div
              className="Card__controls d-flex"
              onClick={onNoteUpdateActivate}
            >
              <img src={images.pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="Card__content">
          {editing && (
            <Edit onNoteAdd={onNoteAdd} onCancelEditNote={onCancelEditNote} />
          )}
          <p className="text-muted mt-5 small">{children}</p>
        </div>
      </div>
      <div className="mt-auto">
        <hr className="my-0" />
        <div className="Card__footer px-5 py-3 text-muted small">
          {new Date(id).toLocaleString("en-US", {
            month: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            day: "2-digit"
          })}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onNoteUpdateActivate: PropTypes.func.isRequired,
  onCancelEditNote: PropTypes.func.isRequired,
  onNoteAdd: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  editing: PropTypes.bool
};

Card.defaultProps = {
  className: undefined,
  editing: undefined
};

export default Card;
