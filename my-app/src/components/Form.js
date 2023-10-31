import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const AddMember = ({ onAddMember }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onAddMember({ name, email, role });
    setName("");
    setEmail("");
    setRole("");
  };
  return (
    <>
      <h3>Add a Member</h3>
      <Form onSubmit={submitHandler} className="addForm">
        <Form.Group className="mb-3">
          <Form.Label>Name Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="name surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Role</Form.Label>
          <Form.Select
            aria-label="select roles"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>select job title</option>
            <option value="Software Engineer">Software Engineer </option>
            <option value="Software Architect">Software Architect</option>
            <option value="SEO Engineer">SEO Engineer</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Software Developer">Software Developer</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">
          Add Member <FaPlus />
        </Button>
      </Form>
    </>
  );
};
export default AddMember;
