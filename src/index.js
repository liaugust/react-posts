import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { rootReducer } from './redux/reducers/rootReducer'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { forbiddenWordsMiddleware } from './redux/middleware/middleware'
import { sagaWather } from './redux/sagas/sagas'

const saga = createSagaMiddleware()

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

saga.run(sagaWather)

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
