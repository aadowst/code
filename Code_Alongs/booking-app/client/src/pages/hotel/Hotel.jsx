import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, error, loading } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );
  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setOpen(true);
  };

  const handleArrow = (val) => {
    let newSlideNumber = slideNumber + val;
    if (newSlideNumber < 0) newSlideNumber = data.photos.length - 1;
    if (newSlideNumber > data.photos.length - 1) newSlideNumber = 0;
    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleArrow(-1)}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleArrow(+1)}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Location: {data.distance} mi from center
            </span>
            <span className="hotelPriceHighlight">
              Book this stay for 3 nights at {data.cheapestPrice} and get a free
              airport taxi
            </span>
            {data.photos && (
              <div className="hotelImages">
                {data.photos.map((photo, idx) => (
                  <div className="hotelImgWrapper">
                    <img
                      src={photo}
                      alt="hotel room detail"
                      onClick={() => handleOpen(idx)}
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay</h1>
                <span>
                  Can you believe this hotel has a location score of 9.8?
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button>Reserve Now!</button>
              </div>
            </div>
          </div>
          <EmailList />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Hotel;
