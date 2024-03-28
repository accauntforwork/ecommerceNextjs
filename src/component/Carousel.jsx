import React from 'react';
import CarouselProvider from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Include styles

const Carousel = ({ items, showArrows = true, showIndicators = true }) => {
  return (
    <CarouselProvider
      autoPlay={true} // Optional: Enable autoplay
      infiniteLoop={true} // Optional: Enable infinite loop
      showStatus={false} // Optional: Hide status indicator
      showThumbs={false} // Optional: Hide thumbnails (if not needed)
      renderArrowPrev={(onClickHandler, hasPrev) => (
        showArrows && hasPrev ? (
          <button type="button" aria-label="Previous" onClick={onClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 8h-1V1l4-4-4-4v1H8c-1.1 0-2 .9-2 2v12c0 1.1 .9 2 2 2h7v-1z" />
            </svg>
          </button>
        ) : (
          <></> // Empty element for inactive prev button
        )
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        showArrows && hasNext ? (
          <button type="button" aria-label="Next" onClick={onClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16H4v1l4 4-4 4v-1h5c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4v1z" />
            </svg>
          </button>
        ) : (
          <></> // Empty element for inactive next button
        )
      )}
      renderIndicatorDots={(onChange, activeIndex) => (
        showIndicators && (
          <div className="carousel-indicators">
            {items.map((item, index) => (
              <button
                key={index}
                className={index === activeIndex ? 'active' : ''}
                type="button"
                onClick={() => onChange(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    onChange(index);
                  }
                }}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        )
      )}
    >
      {items.map((item) => (
        <div key={item.id || item.title} className="carousel-slide">
          {/* Customize content based on your item data (image, title, description, etc.) */}
          <img src={item.image} alt={item.title || 'Carousel item'} />
          {item.title && <h3>{item.title}</h3>}
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </CarouselProvider>
  );
};

export default Carousel;
