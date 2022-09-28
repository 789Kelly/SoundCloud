import React, { useState } from "react";
import { Modal2 } from "../../context/Modal2";
import SignupForm from "./SignupForm";
import "./SignupFormModal.css";

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="create-btn">
        Create Account
      </button>
      {showModal && (
        <Modal2 onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal2>
      )}
    </>
  );
}

export default SignupFormModal;
