import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <main className="home wrapper">
      <div className="title-home">
        <h1>
          <span className="title">So, you want to travel to</span>
          <span className="subtitle">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button-explore">
        <Link to="/destination">
          <div className="btn">
            <span>E X P L O R E</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default home;
