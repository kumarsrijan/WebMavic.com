import React from "react";
import data from "@/components/services/cardData";
import Card from "@/components/services/Card";
const test = () => {
  return (
    <div>
      {data.map((item) => (
        <Card items={item} key={item.id} />
      ))}
    </div>
  );
};

export default test;
