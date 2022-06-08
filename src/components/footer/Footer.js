import './Footer.css';
import twitter from '../../img/Twitter Icon.png';
import facebook from '../../img/Facebook Icon.png';
import instagram from '../../img/Instagram Icon.png';
import linkedin from '../../img/Linkedin Icon.png';
import github from '../../img/GitHub Icon.png';

function Footer() {
  return (
    <footer>
      <div className='images'>
        <img src={twitter} alt='twitter logo' />
        <img src={facebook} alt='facebook logo' />
        <img src={instagram} alt='instagram logo' />
        <img src={linkedin} alt='linkedin logo' />
        <img src={github} alt='github logo' />
      </div>
    </footer>
  );
}

export default Footer;
