import './Products.css';
import { useState, useEffect } from 'react';

function Products(props: any) {

  const scrollAmount = 500; // Adjust the scroll amount as needed

  useEffect(() => {
    const productsList = document.querySelector('.ProductsContainer');
    const scrollLeftButton = document.querySelector('.scroll-button.left');
    const scrollRightButton = document.querySelector('.scroll-button.right');

    // Check if the elements were found before adding event listeners
    if (productsList && scrollLeftButton && scrollRightButton) {
      // Scroll left when the left button is clicked
      scrollLeftButton.addEventListener('click', () => {
        productsList.scrollLeft -= scrollAmount;
      });

      scrollRightButton.addEventListener('click', () => {
        productsList.scrollLeft += scrollAmount;
      });
    }
  }, []);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const elements = document.querySelectorAll('.product-child img');
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


  return (
    <div className="ProductsRoot">
      <div className="ProductsContainer">
        <div className="ProductsList">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="product-child">
            <img src={props.image} alt="This is a feature image" />
          </div>
        ))}
        </div>
        <button className="scroll-button left">{"<"}</button>
        <button className="scroll-button right">{">"}</button>
      </div>
    </div>

  );
}

export default Products;

