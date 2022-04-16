import { useState } from "react";
import { api_webtoon } from "../API";
import useDebounce from "./useDebounce";

function useFetchWebtoon(category, page, platform, genre) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function fetchWebtoon(category, page, platform, genre) {
    setLoading(true);
    setError(false);
    api_webtoon(category, page, platform, genre)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(error);
        setLoading(false);
        setError(true);
      });
  }

  useDebounce(() => fetchWebtoon(category, page, platform, genre), 1000, [
    category,
    page,
    platform,
    genre,
  ]);

  // useDebounce(() => console.log("call API"), 1000, [
  //   category,
  //   page,
  //   platform,
  //   genre,
  // ]);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);
  //   api_webtoon(category, page)
  //     .then((res) => {
  //       setData([...res.data]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       // console.log(error);
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, [category, page]);

  return [data, loading, error];
}

export default useFetchWebtoon;
