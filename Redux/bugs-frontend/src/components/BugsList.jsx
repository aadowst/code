import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadBugs, getUnresolvedBugs, resolveBug } from '../store/bugs';

const BugsList = () => {
	const bugs = useSelector(getUnresolvedBugs)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(loadBugs())
	},[])

	return (
		<ul>{bugs.map(bug => <li key={bug.id}>{bug.description} <button onClick={()=> dispatch(resolveBug(bug.id))}>Resolve</button> </li>)}</ul>
	);
}

export default BugsList;