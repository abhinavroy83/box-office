import React, { useState } from 'react';
import MainpagesLayout from '../components/MainpagesLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputchange = ev => {
    setInput(ev.target.value)
    // console.log(ev.target.value);
  };
  const onSearch=() =>{
    
  }
  return (
    <MainpagesLayout>
      <input type="text" onChange={onInputchange} value={input}/>
      <button type="button" onClick=(onSearch)>search</button>
    </MainpagesLayout>
  );
};

export default Home;
