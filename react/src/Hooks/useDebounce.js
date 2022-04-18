import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  // useEffect(clear, []);
}
