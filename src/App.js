import React from "react";
import Review from "./Review";
function App() {
  const [loading, setLoading] = React.useState(true);
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        {/* {loading ? <h2>Loading...</h2> : <Review />} */}
        <Review />
      </section>
    </main>
  );
}

export default App;
