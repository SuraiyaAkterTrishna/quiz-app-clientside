import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate(`/quiz`);
    }
  return (
    <div className="m-4 md:m-10 lg:m-40">
      <div className="card bg-base-100 shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="card-body">
          <h1 className="card-title sm:text-3xl md:text-4xl lg:text-6xl justify-center lg:mb-4">
            Welcome To Quiz Test
          </h1>
          <p className="sm:text-xl md:text-xl lg:text-2xl text-gray-400 text-center lg:mb-4">
            Take the test, check your skills.
          </p>
          <div className="card-actions justify-center">
            <button onClick={handleStart} className="btn text-xl w-60 btn-secondary btn-circle text-white uppercase">Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
