import { FETCH_POSTS, NEW_POST } from './types';
import posts from '../api/posts';

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/posts');

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
}

export const createPost = (postData) => async dispatch => {
  const response = await posts.post('/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: postData
  })

  const newItem = {
    id: response.data.id,
    title: response.data.body.title,
    body: response.data.body.body
  }

  dispatch({
    type: NEW_POST,
    payload: newItem
  })
}