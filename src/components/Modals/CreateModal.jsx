import React, { useState } from "react";
import "../Modals/CreateModal.css";
import { getApiUrl } from "../../utils/url";
import axios from "axios";

function CreateModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    Name: "",
    Roll: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((cuData) => ({ ...cuData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${getApiUrl()}/api/students`,formData)
    .then((data) => { 
      console.log(data)
     })
     .catch((error) => { 
      console.log(error)
      })
  };

  return (
    <div className="create-modal">
      <div className="create-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="form-header">Create Data </h2>
        <form className="create-modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="number"
            name="Roll"
            value={formData.roll}
            onChange={handleChange}
            placeholder="Roll"
          />
          <button className="create-modal-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;
