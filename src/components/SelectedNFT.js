import React from "react";

const SelectedNFT = ({ selectedNFT }) => {
  return (
    <div id="singleNFTContainer" key={selectedNFT.id}>
      <div className="nftContainer">
        <img id="nftImage" src={selectedNFT.imgURL} />
      </div>
      <div className="title">{selectedNFT.name}</div>
      <div>
        <img id="artistImage" src={selectedNFT.author} />
      </div>
    </div>
  );
};

export default SelectedNFT;
