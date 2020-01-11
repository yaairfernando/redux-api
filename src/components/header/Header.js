import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  background: #5f6caf;
  padding: 10px 20px;
  color: #fff;
`

const Header = () => {
  return(
    <Head>
      <h1 className="text-center">React App</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Comments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Albums</a>
        </li>
      </ul>
    </Head>
  )
};

export default Header;