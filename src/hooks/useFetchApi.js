import axios from "axios";
import { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchApi;
