import React from "react";

const Gallery = ({ nft, selectedNFT }) => {
  return (
    <div id="container">
      <div className="row wrap">
        {nft.map((nft) => {
          return (
            <div className="nftContainer" key={nft.id}>
              <div onClick={() => selectFood(nft.id)}>
                <img id="nftImage" src={nft.imgURL} />
              </div>
              <h1>{nft.name}</h1>
              <div>
                <img id="artistImage" src={nft?.artist?.imgURL} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
