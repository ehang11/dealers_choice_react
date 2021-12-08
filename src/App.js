import React from "react";
import axios from "axios";
import Header from "./Components/Header";
import SelectedNFT from "./components/SelectedNFT";
import Gallery from "./components/Gallery";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //NFT, selected NFT from route
      nft: [],
      //selected NFT
      selectedNFT: {},
    };
  }

  componentDidMount = async () => {
    const nft = (await axios.get("/api/nft")).data;
    this.setState({ nft });
  };

  selectedNFT = async (nftId) => {
    const selectedNFT = (await axios.get(`/api/foods/${nftId}`)).data;
    this.setState({ selectedNFT });
  };
  //create nft

  //delete nft

  render() {
    <div id="app">
      <Header
        //selectedNFT
        selectedNFT={this.state.selectedNFT}
      />
      {this.state.selectedNFT.id ? (
        <SelectedNFT selectedNFT={this.state.selectedNFT} />
      ) : (
        <Gallery nft={this.state.nft} />
      )}
    </div>;
  }
}
export default App;
