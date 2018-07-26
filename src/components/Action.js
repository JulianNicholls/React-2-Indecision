import React from 'react';

const Action = ({ hasOptions, makeDecision }) => (
  <button className="big-button" disabled={!hasOptions} onClick={makeDecision}>
    What should I do?
  </button>
);

export default Action;
