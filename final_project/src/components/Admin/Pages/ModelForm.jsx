// ModalForm.jsx
import React, { useState } from "react";
import "../admin.css";

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    modalFirstName: "",
    modalLastName: "",
    modalEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    onSubmit(formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="modalFirstName">First Name:</label>
          <input
            type="text"
            id="modalFirstName"
            name="modalFirstName"
            value={formData.modalFirstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="modalLastName">Last Name:</label>
          <input
            type="text"
            id="modalLastName"
            name="modalLastName"
            value={formData.modalLastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="modalEmail">Email:</label>
          <input
            type="email"
            id="modalEmail"
            name="modalEmail"
            value={formData.modalEmail}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
