import React from "react";

const BookCard = ({ book, handleDeleteModal, handleEdit, handleRead }) => {
  const handleDelete = () => {};
  return (
    <div className="row mt-5 p-3 shadow rounded-4">
      <div className="col-sm-7 text-center">
        <h4
          style={{ textDecoration: book.isRead ? "line-through" : "none" }}
          className=""
        >
          {book.title}
        </h4>
        <h6>{book.date}</h6>
      </div>
      <div className="col-sm-5 d-flex justify-content-center align-items-center ">
        <button className="btn-group border-0 p-0">
          <button
            onClick={() => handleDeleteModal(book.id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(book)}
            className="btn btn-sm btn-info"
          >
            Edit
          </button>
          <button
            onClick={() => handleRead(book)}
            className="btn btn-sm btn-success"
          >
            {book.isRead ? "Done" : "To Do"}
          </button>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
