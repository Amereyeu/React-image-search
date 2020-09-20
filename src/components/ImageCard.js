import React, { useState, useEffect } from "react";
import { createRef } from "react";
import Modal from "./Modal";

const ImageCard = ({ image }) => {
  const [span, setSpan] = useState(0);
  const imageRef = createRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpan(spans);
  };

  return (
    <>
      <div style={{ gridRowEnd: `span ${span}` }}>
        <img
          src={image.urls.regular}
          alt={image.description}
          ref={imageRef}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <img src={image.urls.regular} alt={image.description} ref={imageRef} />
      </Modal>
    </>
  );
};

export default ImageCard;
