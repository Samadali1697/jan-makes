import './FeatureShow.css';
import { useState, useEffect } from 'react';

function FeatureShow(props: any) {
  const [imagePriority] = useState(props.imagePriority);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const elements = document.querySelectorAll('.flex-child img');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('fade-in');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Run the logic once when the component initially mounts
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rootClass = `featureShowRoot${imagePriority ? ' image-priority' : ''}`;

  return (
    <div id={`featureShow-${props.id}`} className={rootClass}>
      <div className="textColumn">
        <div className="textContainer">
          <p className="text">{props.data.text}</p>
          <p className="heading">{props.data.heading}</p>
          <p className="description">{props.data.description}</p>
          <p className="text">Find the pattern in:</p>
          {props.data.links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-child">
        <img src={props.image} alt="This is a feature image" />
      </div>
    </div>
  );
}

export default FeatureShow;

