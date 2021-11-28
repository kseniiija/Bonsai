import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutBonsai from './components/Main/AboutBonsai/AboutBonsai';
import Main from './components/Main/Main';
import PasionBonsai from './components/Main/PasionBonsai/PasionBonsai';
import Gallery from './components/Main/Gallery/Gallery';
import SoloTree from './components/Main/SoloTree/SoloTree';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutBonsai />
      <PasionBonsai />
      <Gallery />
      <SoloTree />
      <Footer />
    </div>
  );
}

export default App;