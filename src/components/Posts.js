import React, { Component } from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
    grid-gap: 10px;
  }
`

class Post extends Component {
  render() {
    const postItems = this.state.posts.map((post) =>{
      return <PostItem key={post.id} title={post.title} body={post.body} />
    })
    return(
      <Grid className="container mt-4">{postItems}</Grid>
    )
  };
};

export default Post;