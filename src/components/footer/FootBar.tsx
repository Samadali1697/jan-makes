import fb from '../../assets/fb-logo.png';
import ig from '../../assets/ig-logo.png';
import twitter from '../../assets/twitter-logo.png';

import './FootBar.css';

function FootBar() {

  return (
    <div className="footbar">
      <div className="footbar-flex-child first-p footbar-flex-child-big">
        <div className='footbar-flex-child-row'>
        <a href="/"><p className="heading">Jan Makes</p></a>
          <p className="description">Wrap yourself in warmth and creativity with our handcrafted threads. Knit memories, stitch by stitch, with our curated yarns for every masterpiece.</p>
        </div>
        <div className='footbar-flex-child-row'> 
          <a href="about">About</a>
          <a href="jobs">Jobs</a>
          <a href="docs">Docs</a>
        </div>
      </div>

      <div className="footbar-flex-child first-p">
        <div className='footbar-flex-child-row'> </div>
        <div className='footbar-flex-child-row'> 
            <a href="terms-and-conditions">Terms and Conditions</a>
            <a href="privacy-policy">Privacy Policy</a>
            <a href="cookie-policy">Cookie Policy</a>
        </div>
      </div>

      <div className="footbar-flex-child first-p">
        <div className='footbar-flex-child-row'> </div>
        <div className='footbar-flex-child-row'>
          <p className="description">Let’s chat!</p>
          <div className='social'>
            <a href="https://www.instagram.com/syed.samad.ali" target="_blank"><img src={fb} alt="This is a facebook link"/></a>
            <a href="https://www.instagram.com/syed.samad.ali" target="_blank"><img src={ig} alt="This is a instagram link" /></a>
            <a href="https://www.instagram.com/syed.samad.ali" target="_blank"><img src={twitter} alt="This is a twitter link" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootBar
