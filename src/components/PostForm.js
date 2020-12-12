import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createPost } from '../redux/actions/posts'
import { showAlert } from '../redux/actions/app'
import { Alert } from './Alert'

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
      title: ''
    }
	}

	submitHandler = event => {
    event.preventDefault()

    const { title } = this.state

    if (!title.trim()) {
      return this.props.showAlert('Название поста не может быть пустым')
    }

    const newPost = {
      title, id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({title: ''})
  }
  
  changeInputHandler = ({ target: { name, value } }) => {
    this.setState(prev => ({
      ...prev,
      ...{[name]: value}
    }))
  }

	render() {
		return (
			<form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>Заголовок поста</label>
          <input 
            value={this.state.title}
            type='text' 
            className='form-control' 
            id='title' 
            name='title'
            onChange={this.changeInputHandler}
          />
				</div>
				<button className='btn btn-success' type='submit'>Создать</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, { createPost, showAlert })(PostForm)