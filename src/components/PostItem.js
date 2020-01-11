import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  transtion: all 0.5s ease;
  &:hover {
    box-shadow: 1px 3px 4px #758184 !important;
  }
`
const Title = styled.div`
  font-size: 18px;
  text-align: center;
  transition: all 0.5s ease;
  &:hover {
    color: black;
    background: #fff;
    border: none;
  }
`
const Body = styled.div`
  font-size: 12px;
  background: #fff;
  color: black;
`

const PostItem = ({title, body}) => {
  return(
    <Card className="card text-white bg-dark mb-3">
      <Title className="card-header">
        {title}
      </Title>
      <Body className="card-body">
        <p className="card-text">{body}</p>
      </Body>
    </Card>
  ) 
};


PostItem.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired, 
}

export default PostItem;