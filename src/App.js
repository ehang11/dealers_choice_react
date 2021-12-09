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
      selectedNFT: "",
    };
  }

  componentDidMount = async () => {
    const nft = (await axios.get("/nft")).data;
    this.setState({ nft });

    window.addEventListener("hashchange", async () => {
      const selected = window.location.hash.slice(1);
      const selectedNFT = (await axios.get(`/nft/${selected}`)).data;
      this.setState({ selectedNFT: sele });
    });
  };

  chooseNFT = async (NFTId) => {
    const selectedNFT = (await axios.get(`/nft/${NFTId}`)).data;
    this.setState({ selectedNFT });
  };
  //create nft

  //delete nft

  render() {
    return (
      <div id="app">
        <Header />

        {this.state.selectedNFT.id ? (
          <SelectedNFT selectedNFT={this.state.selectedNFT} />
        ) : (
          <Gallery nft={this.state.nft} chooseNFT={this.chooseNFT} />
        )}
      </div>
    );
  }
}
export default App;
