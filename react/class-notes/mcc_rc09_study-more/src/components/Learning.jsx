import React, { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue(initialValue); // create a reset function
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  };
  return [bind, reset];
}

const Learning = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, setColorProps] = useState('#000000');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps}`);
    resetTitle();
    setColorProps('#000000');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" onChange={e => setColorProps(e.target.value)} />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Learning;
