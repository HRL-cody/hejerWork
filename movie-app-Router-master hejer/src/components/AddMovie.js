import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
import "../index.css";
import { Button } from "antd";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function AddMovie({ addMovie }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    posteUrl: "",
    rate: 0,
  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const addStar = (star) => {
    console.log(star);
    setForm({ ...form, rate: star });
  };
  return (
    <div>
      <Button
        className="button"
        style={{
          backgroundColor: "darkgrey",
          border: "2px solid darkgrey",
          width: "8rem",
        }}
        type="primary"
        onClick={openModal}
      >
        Add a movie
      </Button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form className="form-style-8">
          <h2>Add Movies </h2>
          <div>
            <label>Movie Title</label>
            <input
              type="text"
              value={form.title}
              name="title"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label>Movie Description </label>
            <input
              type="text"
              value={form.description}
              name="description"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label>Image Url </label>
            <input
              type="url"
              value={form.posteUrl}
              name="posteUrl"
              onChange={handleOnChange}
            />
          </div>
          Rating
          <StarRating rate={form.rate} addStar={addStar} />
          <Button
            className="submit"
            style={{ marginLeft: "20rem" }}
            type="submit"
            onClick={() => {
              addMovie(form);
              closeModal();
            }}
          >
            Add Movie
          </Button>
          <Button
            className="button"
            style={{ marginLeft: "5rem" }}
            onClick={closeModal}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default AddMovie;
