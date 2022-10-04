import React, { useState } from "react";
import { Modal3 } from "../../context/Modal3";
// import CreateAlbumForm from "./CreateAlbumForm";
import AlbumForm from "./AlbumForm";

function AlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <Modal3 onClose={() => setShowModal(false)}>
          {/* <CreateAlbumForm /> */}
          <AlbumForm />
        </Modal3>
      )}
    </>
  );
}

export default AlbumFormModal;
