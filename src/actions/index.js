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
