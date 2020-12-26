import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const rgbColor = rgb.join(',');
  const hexValue = `#${hex}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>
        {weight}% <span className='alert'>{alert && 'copied'}</span>
      </p>
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;
