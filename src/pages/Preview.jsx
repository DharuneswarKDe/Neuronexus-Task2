import React from "react";
import PreviewCard from "../components/PreviewCard";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const Preview = (props) => {
  const { id } = useParams();
  const productid = Number(id);

  const productslist = data.productslist;

  const filteredItems = productslist.filter(
    (s) => s.retail_price_cents !== null && s.story_html !== null
  );

  const qtyUpdate = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  const items = qtyUpdate.filter((item) => item.id === productid);
  const shoe = items[0];

  return (
    <div className="">
      <PreviewCard shoe={shoe} />
    </div>
  );
};

export default Preview;
