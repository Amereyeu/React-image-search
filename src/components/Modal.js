import React from "react";
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="modal__close"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClose}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>

        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
