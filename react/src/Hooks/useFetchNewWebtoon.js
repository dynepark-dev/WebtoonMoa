import { useState } from "react";
import { api_new_webtoon } from "../API";
import useDebounce from "./useDebounce";

function useFetchNewWebtoon(platform) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function fetchNewWebtoon(platform) {
    setLoading(true);
    setError(false);
    api_new_webtoon(platform)
      .then((res) => {
        setData([...res.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }

  useDebounce(() => fetchNewWebtoon(platform), 1000, [platform]);
  return [data, loading, error];
}

export default useFetchNewWebtoon;
