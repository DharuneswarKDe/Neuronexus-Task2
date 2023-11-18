import React from "react";
import Card from "../components/Card";
import { data } from "../assets/data";
import { BrowserRouter } from "react-router-dom";

const Explore = () => {
  const products = data.productslist;

  const filteredItems = products.filter(
    (s) => s.retail_price_cents !== null && s.story_html !== null
  );

  const items = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen" style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/simple-black-aesthetic-circular-lines-kzlncba894vit67b.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' ,flexDirection: 'column'}}>
          <h1 className="text-[150px] md:text-[200px] md:tracking-normal lg:text-[250px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-400">
            S&S          
          </h1>
          <h3 className="text-[40px] md:text-[40px] md:tracking-normal lg:text-[40px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-200 "style={{ display: 'block', marginTop: '140px' }}>
            Dive into to World of Wonders!
          </h3>
        </div>
       

        <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10 mx-auto" >
        {items.map((shoe, idx) => (
        < Card key={shoe.id} shoe={shoe} />
         ))}
    </div>
   

    </div>

    
  );
};

export default Explore;
