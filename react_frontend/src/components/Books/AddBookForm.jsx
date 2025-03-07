import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

export const AddBookForm = ({ onSubmitBook, cleanForm, data }) => {
  const [formFields, setFormFields] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    book_status: "",
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    let newBook = {
      title: formFields.title,
      author: formFields.author,
      genre: formFields.genre,
      description: formFields.description,
      book_status: formFields.book_status,
    };
    onSubmitBook(newBook);
    console.log("success");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add a book</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div id="modal-modal-title" variant="h6" component="h2">
            Add a new book
          </div> */}
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <p>
                <label>
                  Book title
                  <input
                    type="text"
                    name="title"
                    value={formFields.title}
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Book author
                  <input
                    type="text"
                    name="author"
                    value={formFields.author}
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Book genre
                  <input
                    type="text"
                    name="genre"
                    value={formFields.genre}
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Description
                  <input
                    type="text"
                    name="description"
                    value={formFields.description}
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Status
                  <select
                    value={formFields.book_status}
                    name="book_status"
                    onChange={handleChange}
                  >
                    <option value="Available">Available</option>
                    <option value="Borrowed">Borrowed</option>
                  </select>
                </label>
              </p>
              <p>
                <button type="submit">Add Book</button>
              </p>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
