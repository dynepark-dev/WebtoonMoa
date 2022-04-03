import { useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(x) {
    typeof x === "undefined" ? setValue((current) => !current) : setValue(x);
  }

  return [value, toggleValue];
}

export default useToggle;

//   "if" is better?
//   if (typeof x === "undefined") {
//     setValue((current) => !current);
//   } else {
//     setValue(x);
//   }
