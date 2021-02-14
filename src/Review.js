import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];
  const [loading, setLoading] = useState(true);

  const checkNumber = (ind) => {
    if (ind > people.length - 1) {
      return 0;
    }
    if (ind < 0) {
      return people.length - 1;
    }
    return ind;
  };

  const prevperson = () => {
    const newind = checkNumber(index + 1);
    setIndex(newind);
  };

  const nextPerson = () => {
    const newind = checkNumber(index - 1);
    setIndex(newind);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevperson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
