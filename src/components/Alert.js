import React from "react";
function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
  };

  if (props.alert === null) {
    return null; // Return null if no alert is set
  }
  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
      <div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alert;
