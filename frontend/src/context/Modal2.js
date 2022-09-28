import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal2.css";

const ModalContext2 = React.createContext();

export function ModalProvider2({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext2.Provider value={value}>{children}</ModalContext2.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal2({ onClose, children }) {
  const modalNode = useContext(ModalContext2);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal2">
      <div id="modal-background2" onClick={onClose} />
      <div id="modal-content2">{children}</div>
    </div>,
    modalNode
  );
}
