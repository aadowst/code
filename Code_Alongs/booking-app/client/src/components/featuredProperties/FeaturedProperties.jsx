import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2017/12/21/20/43/biltmore-house-3032522_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/03/02/17/19/paris-3193674_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
    },
  ];
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0] || "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg"}
                alt={item.name}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Very Good</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
