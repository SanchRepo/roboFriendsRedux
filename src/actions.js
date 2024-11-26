import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
//	console.log(text)
	type: CHANGE_SEARCH_FIELD,
	payload: text

})


//reduce thunk allows for async functionss. Redux itself would 
//not be able to process this double funtion and allow
//us to use dispatch in the actions.js Make sure to look back at the
//mapDispatchtoProps in App.js
export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))

}



