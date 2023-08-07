import React from "react";

const DeleteModal = ({ handleDelete, setDeleteModal }) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5>Do you want to delete ?</h5>
        <div className="buttons">
          <button
            onClick={() => setDeleteModal(false)}
            className=" btn btn-warning"
          >
            Close
          </button>
          <button onClick={handleDelete} className=" btn btn-success">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
