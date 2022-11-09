import { useEffect, useState } from "react";
import axios  from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
				setData(res.data)
      } catch (err) {
				console.log(err)
				setError(err)
			}
			setLoading(false)
    };
		fetchData()
		// url removed from dependency array to prevent page from rerendering as input is entered into search field
  },[] );

	const reFetch = async () => {
		console.log(url)
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data)
		} catch (err) {
			setError(err)
		}
		setLoading(false)
	};

	return { data, loading, error, reFetch};
};

export default useFetch;