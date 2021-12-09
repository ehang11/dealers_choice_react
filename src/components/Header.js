import React from "react";

const Header = ({ SelectedNFT }) => {
  return (
    <ul className="nav">
      <li className="header"> MetaGallery: NFT Art Gallery </li>

      <button
        type="button"
        className="explore"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/";
        }}
      >
        Explore
      </button>
      {/* 
      <button
        type="button"
        className="create"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/create";
        }}
      >
        Create
      </button> */}
    </ul>
  );
};

export default Header;
