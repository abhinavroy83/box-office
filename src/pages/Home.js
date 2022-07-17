import React, { useState } from 'react';
import MainpagesLayout from '../components/MainpagesLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=Mens
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onInputchange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  const onkeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainpagesLayout>
      <input
        type="text"
        onChange={onInputchange}
        onkeyDown={onkeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        search
      </button>
    </MainpagesLayout>
  );
};

export default Home;
