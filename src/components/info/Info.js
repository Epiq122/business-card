import './Info.css';
import mail from '../../img/Mail.png';
import text from '../../img/Text.png';

function Info() {
  return (
    <header>
      <h1>Rob Gleason</h1>
      <p className='job--p'>Full Stack Developer</p>
      <p className='website--p'>https://robertgleason.netlify.app/</p>
      <button className='email--btn'>
        <img src={mail} alt='' className='mail--img' />
        <img src={text} alt='' className='text-img' />
      </button>
    </header>
  );
}

export default Info;
