import "./emailList.css"

const EmailList = () => {
	return (
		<div className="mail">
			<h1 className="mailTitle">Members Save Money!</h1>
			<span className="mailDesc">Sign up to get exclusive deals</span>
			<div className="mailInputContainer">
				<input type="text" placeholder="Your Email"/>
				<button>Subscribe</button>
			</div>
		</div>
	)
}

export default EmailList;