import React from "react";
import Search from "./Search";
import youtube from "../../apis/youtube";
import { responsiveProperty } from "@mui/material/styles/cssUtils";
import youtubeApi from "../../apis/youtube";
import VideoPlayer from "./VideoPlayer";
export default class Advice extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideold: null,
  };
  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideold: videoId,
    });
  };
  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideold: response.data.items[0].id.videoId,
    });
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />

        <VideoPlayer videoId={this.state.selectedVideold} />
      </div>
    );
  }
}
