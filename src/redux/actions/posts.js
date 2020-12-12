import { CREATE_POST, REQUEST_POSTS } from "../types"

export const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}