import FeatureShow from '../feature-show/FeatureShow';
import './Home.css';

function Home() {

  return (
    <div className="homeBar">
      <FeatureShow imagePriority={false}/>
      <p>helloooooo</p>
      <FeatureShow imagePriority={true}/>

    </div>
  )
}

export default Home
