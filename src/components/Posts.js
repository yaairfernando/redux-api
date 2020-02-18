import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { fetchPosts } from '../actions';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
    grid-gap: 10px;
  }
`

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    console.log(this.props.newPost.data)
    const postItems = this.props.posts.map((post) =>{
      return <PostItem key={post.id} title={post.title} body={post.body} />
    })
    return(
      <Grid className="container mt-4">{postItems}</Grid>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchPosts })(Posts);