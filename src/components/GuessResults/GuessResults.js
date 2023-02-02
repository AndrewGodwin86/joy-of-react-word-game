import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
