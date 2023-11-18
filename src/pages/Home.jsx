import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
      <div>
          <div className="relative flex flex-col items-center justify-center w-full min-h-screen" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20200710/pngtree-pastel-rainbow-colored-gradient-background-banner-image_351656.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-[150px] md:text-[200px] md:tracking-normal lg:text-[250px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-400">
            S&S 
          </h1>
          <div>
            <br></br><br></br><br></br><br></br><br></br>
          <button className="relative flex bg-[#2a2a2a] dark:bg-slate-800 text-white p-2 items-center justify-center rounded-md cursor-pointer hover:bg-black">
            <Link to="/explore">Explore Now</Link>
          </button>
          </div>
          
        </div>
      </div>
    );

};

export default Home;
