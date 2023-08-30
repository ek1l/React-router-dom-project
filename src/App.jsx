import React from 'react';
import Slide from './Slide';

const App = () => {
  
  const slides = [
    {
      id: 'slide1',
      title: 'slide 1',
    },
    {
      id: 'slide2',
      title: 'slide 2',
    },
    {
      id: 'slide3',
      title: 'slide 3',
    },
    {
      id: 'slide4',
      title: 'slide 4',
    },
  ];

  console.log(slides);
  return (
    <>
      <Slide slides={slides} />
    </>
  );
};

export default App;
