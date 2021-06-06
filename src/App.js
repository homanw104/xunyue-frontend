import './App.css';
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
