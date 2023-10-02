import './FeatureShow.css';
import testImage from '../../assets/IMG_2565_1200x.jpg';

function FeatureShow() {

  return (
    <div className="featureShowRoot">
      <div className="flex-child">
        <div className="col1">
          <p className="text">NEWS</p>
          <p className="heading">DARLING WRAP</p>
          <p className="description">Darling Wrap is a simple and elegant ribbed wrap cardigan with waist ties designed to be worn over dresses or high-waisted jeans – a perfect wardrobe staple.</p>
          <p className="text">Find the pattern in:</p>

          <a href="#home">Home</a>
          <br></br>
          <a href="#pattern">Pattern</a>
          <br></br>
          <a href="#portfolio">Portfolio</a>
        </div>
      </div>
      <div className="flex-child">
        <img src={testImage} alt={"This is a test image"} />
      </div>
    </div>
  )
}

export default FeatureShow
