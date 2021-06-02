import './App.css';
import TrackInfo from "./components/TrackInfo";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <TrackInfo trackId={'1HXdv1z9RlvrcUernyf0MY'} />
    </div>
  );
}

export default App;
