import React from 'react';
import Posts from './Posts';
import Header from './header/Header';
import PostForm from './PostForm'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div>
      <Header />
      <PostForm />
      <Posts />
    </div>
  )
};

export default App;