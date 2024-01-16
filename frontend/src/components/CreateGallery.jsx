import React from "react";
import PropTypes from "prop-types";

function CreateGallery({ title, imageUrl, details }) {
  CreateGallery.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  };
  const maxDetailsLength = 64;
  const truncatedDetails =
    details.length > maxDetailsLength
      ? `${details.slice(0, maxDetailsLength)}...`
      : details;

  const handleClick = () => {
    window.location.href = "/home";
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="A4card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="A4card-header">
        <div
          className="A4card-img"
          style={{
            background: `url(https://image.tmdb.org/t/p/w500${imageUrl})`,
          }}
        />
      </div>
      <div className="A4card-body">
        <div className="A4card-title">{title}</div>
        <div className="A4card-detail">{truncatedDetails}</div>
      </div>
    </div>
  );
}

export default CreateGallery;
