import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  const images = [
    "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/27/15/21/mountain-463762_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_960_720.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading--please wait"
      ) : (
        <>
          {data &&
            images.map((img, idx) => (
              <div className="pListItem" key={idx}>
                <div className="pListTitles">
                  <img className="pListImg" src={img} alt={data[idx]?.type} />
                  <h1>{data[idx]?.type}s</h1>
                  <h2>{data[idx]?.count} {data[idx]?.type}s</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
