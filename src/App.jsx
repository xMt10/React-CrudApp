import { useState } from "react";
import { v4 } from "uuid";
import BookCard from "./components/BookCard";
import DeleteModal from "./components/deleteModal";
import EditModal from "./components/EditModal";
import { toast } from "react-toastify";

function App() {
  const [inputError, setInputError] = useState(false);
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [deletedBooks, setDeletedBooks] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState("");

  // watch changing in the input
  const handleChange = (e) => {
    //updating state
    setBookName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warn("Please enter a book name", { autoClose: 1200 });
      return;
    }

    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };
    setBooks([...books, newBook]);

    setBookName("");

    toast.success("The book was added successfully", { autoClose: 1200 });
  };

  // operation of opening modal
  const handleDeleteModal = (id) => {
    setDeletedBooks(id);
    setDeleteModal(true);
  };

  const handleDelete = () => {
    setDeleteModal(false);
    const updatedBooks = books.filter((item) => item.id !== deletedBooks);
    console.log(deletedBooks);
    setBooks(updatedBooks);
    toast.error("The book was deleted successfully", { autoClose: 1200 });
  };
  const handleEdit = (book) => {
    setShowEditModal(true);
    setEditItem(book);
  };
  const handleEditBook = () => {
    const index = books.findIndex((book) => book.id === editItem.id);

    const cloneBooks = [...books];

    cloneBooks.splice(index, 1, editItem);

    setBooks(cloneBooks);

    setShowEditModal(false);

    toast.info("The book was updated", { autoClose: 1200 });
  };

  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };

    const index = books.findIndex((item) => item.id === book.id);

    const cloneBooks = [...books];

    cloneBooks[index] = updatedBook;
    setBooks(cloneBooks);
  };
  return (
    <div className="">
      <header className="bg-dark text-white text-center py-2">
        <h1>Bookworm</h1>
      </header>
      <div className="container mt-5">
        {inputError && (
          <div className="alert  alert-danger mt-5">{inputError}</div>
        )}
        <form className="d-flex gap-3" onSubmit={handleSubmit}>
          <input
            placeholder="Enter a book name"
            onChange={handleChange}
            value={bookName}
            className="form-control shadow"
            type="search"
          />
          <button className="btn btn-warning shadow">Add</button>
        </form>

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleDeleteModal={handleDeleteModal}
            handleRead={handleRead}
            handleEdit={handleEdit}
          />
        ))}

        {/* MODALS */}
        {deleteModal && (
          <DeleteModal
            handleDelete={handleDelete}
            setDeleteModal={setDeleteModal}
          />
        )}

        {showEditModal && (
          <EditModal
            setShowEditModal={setShowEditModal}
            handleEditBook={handleEditBook}
            setEditItem={setEditItem}
            editItem={editItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
