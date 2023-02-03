// creating a simple store object as an exercise

import reducer from './reducer'

function createStore(reducer){
	let state;
	let listeners = []

	function subscribe(listener){
		listeners.push(listener)
	}
	function dispatch(action){
		// call the reducer
		state = reducer(state, action)
		// notify subscribers
		for (let i = 0; i < listeners.length; i++)
		listeners[i]()
	}
	
	function getState(){
		return state
	}
	return {
		subscribe,
		getState, dispatch
	}
}