import axios from "axios";

// export const fetchPosts = (): any => {
//   return async function getchPostsThunk(dispatch: any, getState: any) {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response.data })
//   }
// }

export const fetchPosts: any = () => async (disfecth: any, getState: any) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  disfecth({ type: 'FETCH_POSTS', payload: response.data });
}