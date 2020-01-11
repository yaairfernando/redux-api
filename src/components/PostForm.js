import React, { Component } from 'react';
import styled from 'styled-components';

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
  }
  render() {
    return(
      <Form className="container mt-4">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" 
            value={this.props.title}
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value})}} 
            className="form-control" 
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" 
            id="description" rows="3"
            value={this.props.body} 
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value})}} 
          />
        </div>
        <button type="submit" className="btn btn-primary d-block">Create new Post</button>
      </Form>
    )
  };
};

export default PostForm;