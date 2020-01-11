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
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((data) =>{
        this.setState({
          posts: data.data
        })
        console.log(this.state.posts)
      })
      .catch((data) => {
        console.log(data)
      })
  }
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