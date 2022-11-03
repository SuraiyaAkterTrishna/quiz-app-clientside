import React from "react";

const Home = () => {
  return (
    <div className="m-4 md:m-10 lg:m-40">
      <div className="card bg-base-100 shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="card-body">
          <h1 className="card-title sm:text-3xl md:text-4xl lg:text-6xl justify-center mb-4">
            Welcome To Quiz Test
          </h1>
          <p className="sm:text-xl md:text-xl lg:text-2xl text-gray-400 text-center mb-4">
            Take the test, check your skills.
          </p>
          <div className="card-actions justify-center">
            <button className="btn text-xl w-60 btn-secondary btn-circle text-white uppercase">Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
