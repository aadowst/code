import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">

      <div className="fpItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/21/20/43/biltmore-house-3032522_960_720.jpg"
          alt="Hotel Biltmore"
          className="fpImg"
        />
        <span className="fpName">Hotel Biltmore</span>
        <span className="fpCity">Asheville, NC</span>
        <span className="fpPrice">Starting from $299</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Very Good</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cdn.pixabay.com/photo/2018/03/02/17/19/paris-3193674_960_720.jpg"
          alt="Montmarte"
          className="fpImg"
        />
        <span className="fpName">Montmarte</span>
        <span className="fpCity">Paris, France</span>
        <span className="fpPrice">Starting from $275</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>

			<div className="fpItem">
        <img
          src="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg"
          alt="Midtown Manhattan"
          className="fpImg"
        />
        <span className="fpName">Midtown Manhattan</span>
        <span className="fpCity">New York City, NY</span>
        <span className="fpPrice">Starting from $329</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

    </div>
  );
};

export default FeaturedProperties;
