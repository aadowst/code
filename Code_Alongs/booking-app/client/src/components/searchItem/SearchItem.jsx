import "./searchItem.css"

const SearchItem = () => {
	return(
		<div className="searchItem">
			<img src="https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg" alt="" className="siImg" />
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">500m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">Studio Apartment with Air Conditioning</span>
				<span className="siFeatures">Entire Studio. 1 Bath. 1 Bed</span>
				<span className="siCancelOp">Free Cancellation</span>
				<span className="siCancelOpSubtitle">Book today and cancel later, if necessary</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">$123</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<button className="siCheckButton">See Availability</button>
				</div>
			</div>
		</div>
	)
}

export default SearchItem;