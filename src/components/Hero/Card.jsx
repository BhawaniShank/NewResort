import React from 'react';

const Card = ({ title, subtitle, description, image }) => {
  const styles = {
    wrapper: {
      perspective: '3000px',
    },
    cardContent: {
      transformStyle: 'preserve-3d',
      transition: 'transform 1s',
    },
    cardContentHover: {
      transform: 'rotateY(180deg)',
    },
    
    shared: {
      position: 'absolute',
      width: '100%', // Match the parent's width
      height: '100%', // Match the parent's height
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
    },

    frontContent: {
      transform: 'rotateY(0deg)',
    },
    backContent: {
      transform: 'rotateY(180deg)',
      height: '',
   
    },
    frontBorder: {
      position: 'absolute',
      inset: '1em',
      border: '1px solid currentColor',
      transform: 'translateZ(3rem)',
      pointerEvents: 'none',
    },
    frontText: {
      transform: 'translateZ(6rem)',
    },
    topBorder: {
      position: 'absolute',
      inset: '1em',
      border: '1px solid currentColor',
      transform: 'translateZ(9rem)',
      pointerEvents: 'none',
    },
    title: {
      position: 'relative',
      transform: 'translateZ(9rem)',
      textShadow: '0 0 1rem rgba(0,0,0,0.1)',
    },
    subtitle: {
      position: 'relative',
      transform: 'translateZ(6rem)',
      textShadow: '0 0 1rem rgba(0,0,0,0.1)',
    },
    overlayContainer: {
      position: 'relative',
      transformStyle: 'preserve-3d',
      height: '100%',
      width: '100%',
    },
    bodyText: {
      transform: 'translateZ(6rem)',
    },
  };

  return (
    <div className="min-w-[350px] " style={styles.wrapper}>
      <div
        className="relative w-full h-[350px]"
        style={styles.cardContent}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = styles.cardContentHover.transform;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
        }}
      >
        {/* Front of card */}
        <div
          className="p-12"
          style={{ ...styles.shared, ...styles.frontContent }}
        >
          <div
            style={styles.overlayContainer}
            className={`bg-[#b7c9e5] bg-[url('${image}')] bg-cover bg-blend-overlay text-gray-800`}
          >
            <div style={styles.frontBorder}></div>
            <div
              className="grid content-center justify-items-center h-full p-12 relative"
              style={styles.frontText}
            >
              <p
                className="uppercase tracking-[4px] text-xs font-bold opacity-70 mb-4"
                style={styles.subtitle}
              >
                {subtitle}
              </p>
              <h3
                className="text-5xl uppercase"
                style={styles.title}
              >
                {title}
              </h3>
            </div>
            <div style={styles.topBorder}></div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="p-6  grid content-center  bg-gray-800 text-[#b7c9e5]"
          style={{ ...styles.shared, ...styles.backContent }}
        >
          <p
            className="text-2xl leading-relaxed font-normal"
            style={styles.bodyText}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
