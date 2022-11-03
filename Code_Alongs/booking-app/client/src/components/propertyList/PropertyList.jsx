import "./propertyList.css"

const PropertyList = () => {
	return (
		<div className="pList">
			<div className="pListItem">
				<div className="pListTitles">
					<img className="pListImg" src="https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_960_720.jpg" alt="hotels" />
					<h1>Hotels</h1>
					<h2>233 hotels</h2>
				</div>
			</div>

			<div className="pListItem">
				<div className="pListTitles">
					<img className="pListImg" src="https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_960_720.jpg" alt="apartments" />
					<h1>Apartments</h1>
					<h2>637 apartments</h2>
				</div>
			</div>

			<div className="pListItem">
				<div className="pListTitles">
					<img className="pListImg" src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_960_720.jpg" alt="resorts" />
					<h1>Resorts</h1>
					<h2>182 resorts</h2>
				</div>
			</div>

			<div className="pListItem">
				<div className="pListTitles">
					<img className="pListImg" src="https://cdn.pixabay.com/photo/2014/09/27/15/21/mountain-463762_960_720.jpg" alt="chalets" />
					<h1>Chalets</h1>
					<h2>75 chalets</h2>
				</div>
			</div>

			<div className="pListItem">
				<div className="pListTitles">
					<img className="pListImg" src="https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_960_720.jpg" alt="cottages" />
					<h1>Cottages</h1>
					<h2>138 cottages</h2>
				</div>
			</div>
		</div>
	)
}

export default PropertyList