import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/Actions/Actions";
function EditTodo({ todo }) {
  const [edit, setEdit] = useState(todo.text);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <>
      <button className="edit-btn" onClick={handleShow}>
        <i className="far fa-edit"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            aria-label="recipient's Username"
            aria-describedby="basic-addon2"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              dispatch(
                editTask({ id: todo.id, text: edit, completed: todo.completed })
              );
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              setEdit(todo.text);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo;
