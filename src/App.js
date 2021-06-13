import './App.css';
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchTracksPage from "./pages/SearchTracksPage";
import SearchArtistsPage from "./pages/SearchArtistsPage";
import AddTrackPage from "./pages/AddTrackPage";
import AddArtistPage from "./pages/AddArtistPage";
import EditTrackPage from "./pages/EditTrackPage";
import EditArtistPage from "./pages/EditArtistPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/search' component={SearchPage}/>
        <Route exact path='/searchTracks' component={SearchTracksPage}/>
        <Route exact path='/searchArtists' component={SearchArtistsPage}/>
        <Route exact path='/addTrack' component={AddTrackPage}/>
        <Route exact path='/addArtist' component={AddArtistPage}/>
        <Route exact path='/editTrack' component={EditTrackPage}/>
        <Route exact path='/editArtist' component={EditArtistPage}/>
      </Switch>
    </Router>
  );
}

export default App;
