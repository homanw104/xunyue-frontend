import './App.css';
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import AddArtistPage from "./pages/AddArtistPage";
import AddTracksPage from "./pages/AddTracksPage";
import SearchTracksPage from "./pages/SearchTracksPage";
import SearchArtistsPage from "./pages/SearchArtistsPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/searchTracks" component={SearchTracksPage} />
        <Route exact path="/searchArtists" component={SearchArtistsPage} />
        <Route exact path="/addTracks" component={AddTracksPage} />
        <Route exact path="/addArtist" component={AddArtistPage} />
      </Switch>
    </Router>
  );
}

export default App;
