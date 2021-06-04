import './App.css';
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    </Router>
  );
}

export default App;
