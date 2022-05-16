import React from "react";
import Navbar from "./Navbar";
import Newsfeed from "./Newsfeed";
import Profile from "./Profile";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main
        className="d-flex m-auto justify-content-evenly border"
        style={{ width: "75%" }}
      >
        <section className="col-4 d-flex justify-content-end">
          <Profile height="400px" width="90%" />
        </section>
        <section className="col-5">
          <Newsfeed />
        </section>
        <section className="col-3 "></section>
      </main>
      {/* Main */}
    </div>
  );
};

export default Home;
