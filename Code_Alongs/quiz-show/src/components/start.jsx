import { useRef, useEffect } from "react"
import useSound from "use-sound";
import play from "../assets/play.mp3"

export default function Start({setUsername}){
	const [letsPlay] = useSound(play)
	const inputRef = useRef();
	const handleClick = ()=>{
		inputRef.current.value && setUsername(inputRef.current.value)
	}

	useEffect(()=> {

		letsPlay()
	}, [letsPlay])
	return (
		<div className="start">
			<input placeholder="enter your name" className="startInput" ref={inputRef}/>
			<button className="startButton" onClick={handleClick}>Start</button>
		</div>
	)

}