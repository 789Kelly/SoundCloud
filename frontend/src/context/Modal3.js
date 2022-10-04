import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal3.css";

const ModalContext3 = React.createContext();

export function ModalProvider3({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext3.Provider value={value}>{children}</ModalContext3.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal3({ onClose, children }) {
  const modalNode = useContext(ModalContext3);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal3">
      <div id="modal-background3" onClick={onClose} />
      <div id="modal-content3">{children}</div>
    </div>,
    modalNode
  );
}
