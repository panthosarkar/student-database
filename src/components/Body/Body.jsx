import React, { useState } from "react";
import "./Body.css";
import CreateModal from "../Modals/CreateModal";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (formData) => {
    try {
      console.log("from-data", formData);

      closeModal();
    } catch {
      console.error("error");
    }
  };
  return (
    <div className="body-container">
      <h1 className="header ">Student Database</h1>
      <div className="body-container-btns">
        <button className="create-btn" onClick={openModal}>
          Create
        </button>
        {isModalOpen && (
          <CreateModal isOpen={isModalOpen} onClose={closeModal} />
        )}
        <button>Edit</button>
        <button>Delete</button>
        <button>Search</button>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default Body;
