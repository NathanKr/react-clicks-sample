const ShowClicks = () => {
  let count = 0;

  const style = { width: "100%", height: "100vh" };
  return (
    <div
      style={style}
      onClick={() => {
        document.title = `clicks : ${count}`;
        count++; // --- closure on count
      }}
    >
      <h2>Component ShowClicks</h2>
      <p>click on the viewport and look on the browser tab</p>
    </div>
  );
};

export default ShowClicks;
