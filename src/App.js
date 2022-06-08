import './App.css';
import Info from './components/info/Info';
import About from './components/about/About';
import Interests from './components/interests/Interests';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
