import React from "react";
import "./Grid.css"; // External stylesheet for better organization

const Card = ({ frontTitle, frontSubtitle, backContent }) => (
  <div className="card">
    <div className="card__content">
      <div className="card__front">
        <h3 className="card__title">{frontTitle}</h3>
        <p className="card__subtitle">{frontSubtitle}</p>
      </div>
      <div className="card__back">
        <p className="card__body">{backContent}</p>
      </div>
    </div>
  </div>
);

const Grid = () => (
  <div className="topCards grid gap-10 justify-center p-2  mx-auto w-full lg:min-w-[60em] sm:px-40 md:px-24 lg:px-10  grid-cols-1 lg:grid-cols-3">
    <Card
      frontTitle="Events"
      frontSubtitle="Time for some fun"
      backContent="This would be some longer text that gives a description of the things from the other side, I guess."
    />
    <Card
      frontTitle="Experience"
      frontSubtitle="Let’s Explore!"
      backContent="Experience thrilling rides and unforgettable memories in our Adventure Park."
    />
    <Card
      frontTitle="Room"
      frontSubtitle="Delicious Delights"
      backContent="Indulge in a variety of cuisines from all over the world, crafted with love."
    />
  </div>
);

export default Grid;
