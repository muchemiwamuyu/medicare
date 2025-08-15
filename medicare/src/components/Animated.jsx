import React from "react";

function Animated({ color = "primary:#0B8793" }) {

  return (
    <lord-icon
      src="https://cdn.lordicon.com/asyunleq.json"
      trigger="boomerang"
      colors={color}
      style={{ width: "78px", height: "78px" }}
    ></lord-icon>
  );
}

export default Animated;

export function Animated2 () {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/tewlfgbl.json"
      trigger="loop"
      state="loop-queue"
      style={{ width: "100px", height: "100px" }}>
    </lord-icon>
  );
}



