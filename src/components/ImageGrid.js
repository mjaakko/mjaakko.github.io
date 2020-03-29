import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import ImageModal from "../components/ImageModal";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  grid-template-rows: repeat(auto-fill, 170px);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 290px;
  height: 170px;
`;

const Image = ({ image }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <>
      <ImageModal
        image={image.image.large.fluid}
        description={image.description}
        visible={showFull}
        onClickOutside={() => setShowFull(false)}
      />
      <ImageContainer onClick={() => setShowFull(true)}>
        <Img
          fixed={image.image.thumbnail.fixed}
          alt=""
          style={{ width: 290, height: 170 }}
          imgStyle={{ margin: 0 }}
        />
      </ImageContainer>
    </>
  );
};

export default ({ images }) => (
  <ImageGrid>
    {images.map(image => {
      return (
        <Image key={`${image.description}_${image.image.id}`} image={image} />
      );
    })}
  </ImageGrid>
);
