import React, { useState } from "react";
import "./Body.css";
import CreateModal from "../Modals/CreateModal";
import axios from "axios";
import { getApiUrl } from "../../utils/url";

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
        <a className="create-btn" onClick={openModal}>
          Create
        </a>
        {isModalOpen && (
          <CreateModal isOpen={isModalOpen} onClose={closeModal} />
        )}
        <a>Edit</a>
        <a>Delete</a>
        <a>Search</a>
        <a>Show All</a>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Body;
