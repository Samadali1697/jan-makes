import fb from '../../assets/fb-logo.png';
import ig from '../../assets/ig-logo.png';
import twitter from '../../assets/twitter-logo.png';

import './FootBar.css';

function FootBar() {

  return (
    <div className="footbar">
      <div className="footbar-flex-child first-p footbar-flex-child-big">
        <div className='footbar-flex-child-row'>
          <p className="heading">Jan Makes</p>
          <p className="description">Wrap yourself in warmth and creativity with our handcrafted threads. Knit memories, stitch by stitch, with our curated yarns for every masterpiece.</p>
        </div>
        <div className='footbar-flex-child-row'> 
          <a href="dsdsds">About</a>
          <a href="dsdsds">Jobs</a>
          <a href="dsdsds">Docs</a>
        </div>
      </div>

      <div className="footbar-flex-child first-p">
        <div className='footbar-flex-child-row'> </div>
        <div className='footbar-flex-child-row'> 
            <a href="dsdsds">Terms and Conditions</a>
            <a href="dsdsds">Privacy Policy</a>
            <a href="dsdsds">Cookie Policy</a>
        </div>
      </div>

      <div className="footbar-flex-child first-p">
        <div className='footbar-flex-child-row'> </div>
        <div className='footbar-flex-child-row'>
          <p className="description">Let’s chat!</p>
          <div className='social'>
            <img src={fb} alt="This is a facebook link" />
            <img src={ig} alt="This is a instagram link" />
            <img src={twitter} alt="This is a twitter link" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootBar
