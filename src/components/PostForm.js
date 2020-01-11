import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { createPost } from '../actions';
import { connect }  from 'react-redux';

const Form = styled.form`
  width: 50% !important;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
    // Call action
  }
  render() {
    return(
      <Form className="container mt-4" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" 
            value={this.props.title}
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value})}} 
            className="form-control" 
            id="title"
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" 
            id="description" rows="3"
            value={this.props.body} 
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value})}} 
            name="body"
          />
        </div>
        <button type="submit" className="btn btn-primary d-block">Create new Post</button>
      </Form>
    )
  };
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
} 

export default connect(null, { createPost })(PostForm);