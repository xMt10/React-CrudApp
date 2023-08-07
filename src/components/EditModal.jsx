import React from "react";

const EditModal = ({
  setShowEditModal,
  editItem,
  setEditItem,
  handleEditBook,
}) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5 className="text-center">Edit Book Name</h5>

        <input
          value={editItem.title}
          onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
          type="text"
          className="form-control"
        />

        <div className="buttons">
          <button
            onClick={() => {
              setShowEditModal(false);
            }}
            className="btn btn-warning"
          >
            Close
          </button>
          <button onClick={handleEditBook} className="btn btn-success">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
