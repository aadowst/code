import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img className="featuredImg" src="https://cdn.pixabay.com/photo/2017/07/25/21/31/pub-2539603_960_720.jpg" alt="Dublin" />
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img className="featuredImg" src="https://cdn.pixabay.com/photo/2017/05/08/07/56/skyline-2294676_960_720.jpg" alt="Austin" />
				<div className="featuredTitles">
					<h1>Austin</h1>
					<h2>85 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img className="featuredImg" src="https://cdn.pixabay.com/photo/2017/09/04/13/10/madrid-2713916_960_720.jpg" alt="Madrid" />
				<div className="featuredTitles">
					<h1>Madrid</h1>
					<h2>98 properties</h2>
				</div>
			</div>
		</div>
	)
}

export default Featured