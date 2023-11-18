import React from "react";
import { Link } from "react-router-dom";

const Checkout=()=>
{
return(

<div className="">
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-blue-gradient-color-technology-line-wave-background_1142-10527.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais")', backgroundSize: 'cover', backgroundPosition: 'center' ,flexDirection: 'column'}}>
          <h1 className="text-[150px] md:text-[200px] md:tracking-normal lg:text-[250px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-400">
            S&S          
          </h1>
          <h3 className="text-[40px] md:text-[40px] md:tracking-normal lg:text-[40px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-200 "style={{ display: 'block', marginTop: '140px' }}>
           Thanks for placing your orders!!!
          </h3>
          <div>
            <br></br><br></br><br></br><br></br><br></br>
          <button className="relative flex bg-[#2a2a2a] dark:bg-slate-800 text-white p-2 items-center justify-center rounded-md cursor-pointer hover:bg-black">
            <Link to="/explore">Continue shopping</Link>
          </button>
          </div>
        </div>
</div>
   );
    };
export default Checkout;