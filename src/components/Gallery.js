import React from "react";

const Gallery = ({ nft, selectedNFT, artist }) => {
  return (
    <div className="grid">
      {nft.map((nft) => {
        return (
          <div className="griditem">
            <div className="nftContainer" key={nft.id}>
              <div onClick={() => selectedNFT(nft.id)}>
                <img id="nftImage" src={nft.imgURL} />
              </div>
              <div className="title">{nft.name}</div>
              <img id="artistImage" src={nft.author} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
