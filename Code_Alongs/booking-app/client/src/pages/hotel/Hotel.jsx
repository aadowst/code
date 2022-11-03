import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { parseWithOptions } from "date-fns/fp";
import { useState } from "react";

const Hotel = () => {

	const [slideNumber, setSlideNumber] = useState(0)
	const [open, setOpen] = useState(false)
	const handleOpen = (idx) => {
		setSlideNumber(idx)
		setOpen(true)
	}

	const handleArrow = (val) => {
		let newSlideNumber = slideNumber + val;
		if (newSlideNumber < 0) newSlideNumber = photos.length -1
		if (newSlideNumber > photos.length - 1) newSlideNumber = 0
		setSlideNumber(newSlideNumber)
	}

  const photos = [
    {
      src: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0e/05/c5/32/photo0jpg.jpg",
    },
    {
      src: "https://image-tc.galaxy.tf/wijpeg-1mklruafzyv3gsx176e6vo3en/emerald-3_wide.jpg?crop=0%2C103%2C2000%2C1125&width=800",
    },
    {
      src: "http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
    },
    {
      src: "https://afar.brightspotcdn.com/dims4/default/a3055a8/2147483647/strip/false/crop/1500x1001+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F9c%2Faf%2Fcf220f8fd93b8b503de9810d17c3%2Foriginal-nvc-160.jpg",
    },
    {
      src: "https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M",
    },
  ];
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
				{open && <div className="slider">
					<FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
					<FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleArrow(-1)}/>
					<div className="sliderWrapper">
						<img src={photos[slideNumber].src} alt="" className="sliderImg" />
					</div>
					<FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleArrow(+1)}/>
					</div>}
        <div className="hotelWrapper">
					<button className="bookNow">Reserve Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>125 Main St, Topeka, KS</span>
          </div>
          <span className="hotelDistance">
            Excellent Location: 0.5 mi from center
          </span>
          <span className="hotelPriceHighlight">
            Book this stay for 3 nights and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, idx) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="hotel room detail" onClick={()=>handleOpen(idx)} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">The best hotel in town</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                iusto. Natus error voluptates necessitatibus vero eius ipsum,
                in, iure ab quod ipsam officiis fugiat rerum atque tempore
                inventore quae architecto!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weeklong stay</h1>
              <span>
                Can you believe this hotel has a location score of 9.8?
              </span>
              <h2>
                <b>$875</b>(7 nights)
              </h2>
              <button>Reserve Now!</button>
            </div>
          </div>
        </div>
					<EmailList/>
					<Footer/>
      </div>
    </>
  );
};

export default Hotel;
