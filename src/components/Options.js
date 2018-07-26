import React from 'react';

const Options = ({ options, removeAll, removeOption }) => {
  if (options.length === 0) return <p>You have no options</p>;

  return (
    <div>
      <button className="button button--link" onClick={removeAll}>
        Remove All
      </button>
      {options.map(option => (
        <Option key={option} text={option} removeOption={removeOption} />
      ))}
    </div>
  );
};

const Option = ({ text, removeOption }) => (
  <div className="option">
    {text}
    <button className="button button--link" onClick={() => removeOption(text)}>
      Remove
    </button>
  </div>
);

export default Options;
