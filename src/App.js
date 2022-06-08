import './App.css';
import profile from '../src/img/profile-removebg-preview.png';
import Info from './components/info/Info';
import About from './components/about/About';
import Interests from './components/interests/Interests';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <img src={profile} alt='rob gleason' className='profile--img' />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
