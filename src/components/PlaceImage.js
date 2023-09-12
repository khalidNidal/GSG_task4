import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { ImageSize } from "./MyContext";

const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSize);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
