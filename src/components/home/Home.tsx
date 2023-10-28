import FeatureShow from '../feature-show/FeatureShow';
import featureImage1 from '../../assets/IMG_1200x.jpg';
import featureImage2 from '../../assets/IMG_2565_1200x.jpg';
import './Home.css';
import { useState } from 'react';
import { Link } from '../../types/Link'; 

function Home() {
  const [data1] = useState({
    text: 'NEWS',
    heading: 'ANEMONE SWEATER',
    description:
      'Anemone Sweater - Adult features an allover Fair Isle flower pattern and ribbed edges.',
    links: [
      { label: 'English', href: '#english' },
      { label: 'German', href: '#german' },
      { label: 'French', href: '#french' },
    ] as Link[],
  });
  const [data2] = useState({
    text: 'NEWS',
    heading: 'DARLING WRAP',
    description:
      'Darling Wrap is a simple and elegant ribbed wrap cardigan with waist ties designed to be worn over dresses or high-waisted jeans – a perfect wardrobe staple.',
    links: [
      { label: 'English', href: '#english' },
      { label: 'German', href: '#german' },
    ] as Link[],
  });

  return (
    <div className="homeBar">
      <FeatureShow imagePriority={false} image={featureImage1} id={1} data={data1}/>
      <p>helloooooo</p>
      <FeatureShow imagePriority={true} image={featureImage2} id={2} data={data2}/>
      <p>helloooooo</p>


    </div>
  )
}

export default Home
