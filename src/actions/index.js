import { FETCH_POSTS, NEW_POST } from './types';
import posts from '../api/posts';

export const fetchPosts = () => async dispatch => {
  console.log("fetching")
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
    body: JSON.stringify(postData)
  })

  dispatch({
    type: NEW_POST,
    payload: response
  })
}