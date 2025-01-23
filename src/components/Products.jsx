import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import axios from "axios";

const Products = ({ cardDetails }) => {
  return (
    <div className="flex gap-5 flex-wrap mx-auto justify-center mt-10">
      {cardDetails &&
        cardDetails.map((cardDetails, index) => (
          <Card key={index} cardDetail={cardDetails} />
        ))}
    </div>
  );
};

export default Products;
