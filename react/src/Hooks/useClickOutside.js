import { useEffect, useRef } from "react";

export default function useClickOutside(handler) {
  let domNode = useRef();

  useEffect(() => {
    let xhandler = (e) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", xhandler);

    return () => {
      document.removeEventListener("mousedown", xhandler);
    };
  });

  return domNode;
}
