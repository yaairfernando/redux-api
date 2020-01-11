import React from 'react';
import Posts from './Posts';
import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div>
      <Header />
      <Posts />
    </div>
  )
};

export default App;