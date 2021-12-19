import React, { useState, useEffect } from "react";

const ShowClicksUsingHooks = () => {
  const [clicks, setClicks] = useState(0);
  const style = { width: "100%", height: "100vh" };

  useEffect(() => {
    document.title = `clicks : ${clicks}`;
  });

  return (
    <div style={style} onClick={() => setClicks(clicks + 1)}>
      <h2>Component ShowClicksUsingHooks</h2>
      <p>click on the viewport and look on the browser tab and DOM</p>
      <p>clicks : {clicks}</p>
    </div>
  );
};

export default ShowClicksUsingHooks;
