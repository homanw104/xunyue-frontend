import './App.css';
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import AddArtistPage from "./pages/AddArtistPage";
import AddTracksPage from "./pages/AddTracksPage";
import TrackSearchPage from "./pages/TrackSearchPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/addArtist" component={AddArtistPage} />
        <Route exact path="/trackSearch" component={TrackSearchPage} />
        <Route exact path="/addTracks" component={AddTracksPage} />
        <Route exact path="/artistSearch" component={ArtistSearchPage} />


      </Switch>
    </Router>
  );
}

export default App;
