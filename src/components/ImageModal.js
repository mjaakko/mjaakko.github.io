import React, { useRef } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ModalContent = styled.div`
  background-color: white;
  margin: 5% auto;
  padding: 1rem;
  max-width: calc(2rem + 1200px);
  min-width: calc(2rem + ${props => props.contentWidth}px);
`;

const Figure = styled.figure`
  padding: 0;
  margin: 0;

  & > figcaption {
    padding-top: 0.5rem;
    font-style: italic;
  }
`;

const ImageModal = ({ image, description, visible, onClickOutside }) => {
  const modal = useRef();

  if (!visible) {
    return null;
  }

  return (
    <Modal
      ref={modal}
      onClick={event => {
        if (event.target === modal.current) {
          onClickOutside();
        }
      }}
    >
      <ModalContent contentWidth={image.presentationWidth}>
        <Figure>
          <Img fluid={image} />
          <figcaption>{description}</figcaption>
        </Figure>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
