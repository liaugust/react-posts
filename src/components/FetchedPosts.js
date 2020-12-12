/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts } from '../redux/actions/posts'
import { Loader } from './Loader'
import Post from './Post'

export default () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedPosts)
	const loading = useSelector(state => state.app.loading)
	const error = useSelector(state => state.app.error)

	if (loading) {
		return <Loader />
	}

	if (error) {
		return (
			<div class="alert alert-error" role="alert">
				Загрузка прошла успешно!
			</div>
		)
	}

	if (!posts.length) {
		return (
			<button
				onClick={() => dispatch(fetchPosts())}
				className='btn btn-primary'
			>
				Загрузить
			</button>
		)
	}
	return posts.map(post => <Post key={post.id} post={post} />)
}
