import React, { useState } from 'react';
import SingleColor from './SingleColor';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#617d98').all(10));

  toast.configure();
  const notify = (error) => {
    return toast.error(error, {
      transition: Slide,
      hideProgressBar: true,
      position: 'top-right',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      notify(error.message);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#617d98'
            className={error ? 'error' : null}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} hex={color.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
