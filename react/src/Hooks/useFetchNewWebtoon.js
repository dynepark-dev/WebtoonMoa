import { useState } from "react";
import { api_new_webtoons } from "../API";
import useDebounce from "./useDebounce";

function useFetchNewWebtoon(platform) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function fetchNewWebtoon(platform) {
    setLoading(true);
    setError(false);
    api_new_webtoons(platform)
      .then((res) => {
        setData([...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(error);
        setLoading(false);
        setError(true);
      });
  }

  useDebounce(() => fetchNewWebtoon(platform), 1000, [platform]);
  // useDebounce(() => console.log("call API"), 1000, [platform]);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);
  //   api_new_webtoons(platform)
  //     .then((res) => {
  //       setData([...res.data]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       // console.log(error);
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, [platform]);

  return [data, loading, error];
}

export default useFetchNewWebtoon;
