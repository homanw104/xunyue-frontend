import './App.css';
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import AddArtistPage from "./pages/AddArtistPage";
import TrackSearchPage from "./pages/TrackSearchPage";

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
      </Switch>
    </Router>
  );
}

export default App;
