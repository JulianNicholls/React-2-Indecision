import React from 'react';

const Options = ({ options, removeAll, removeOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button className="button button--link" onClick={removeAll}>
        Remove All
      </button>
    </div>
    {options.length === 0 && <p className="widget__message">You have no options</p>}
    {options.map(option => (
      <Option key={option} text={option} removeOption={removeOption} />
    ))}
  </div>
);

const Option = ({ text, removeOption }) => (
  <div className="option">
    {text}
    <button className="button button--link" onClick={() => removeOption(text)}>
      Remove
    </button>
  </div>
);

export default Options;
