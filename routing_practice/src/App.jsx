import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Home = () => {
  return <h1>Welcome</h1>;
};

const NumberPage = () => {
  const { number } = useParams();
  return <h1>{isNaN(+number) ? 'Invalid Number' : number}</h1>;
};

// const WordPage = () => {
//   const { word } = useParams();
//   return <h1>{isNaN(+word) ? word : 'Invalid Word'}</h1>;
// };

const WordPage = () => {
  const { word } = useParams();
  return <h1>{typeof word === 'string' ? word : 'Invalid Word'}</h1>;
};


const ColoredWordPage = () => {
  const { word, color1, color2 } = useParams();
  const style = {
    color: color1 || 'black',
    backgroundColor: color2 || 'white',
  };
  return <h1 style={style}>{word}</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<WordPage />} />
        <Route path="/:number" element={<NumberPage />} />
        <Route path="/:word/:color1/:color2" element={<ColoredWordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
