import React from "react";
import "./Products.css";
import { useInView } from "react-intersection-observer";

const Products = ({ imageSrc, title, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="products__image" />
          <div className="products__content">
            <h1 className="products__title">{title}</h1>
            <p>Subtitutlo</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="products__content">
            <h1 className="products__title">{title}</h1>
            <p>Subtitutlo</p>
          </div>
          <img src={imageSrc} alt="Travel" className="products__image" />
        </>
      );
    }
  };

  return (
    <div id="products" className={inView ? "products products--zoom" : "products"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Products;
