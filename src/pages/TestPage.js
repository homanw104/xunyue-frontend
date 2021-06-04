import React from 'react';
import MenuBar from "../components/MenuBar";
import TrackInfo from "../components/TrackInfo";

class TestPage extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <TrackInfo trackId={'1HXdv1z9RlvrcUernyf0MY'} />
      </div>
    );
  }
}

export default TestPage;
