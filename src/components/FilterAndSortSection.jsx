import React, { useEffect, useState } from "react";
import { FilterData } from "../data/Filterdata";
import filterIcon1 from "../assets/FilterAndSortIcon/Vector (5).png";
import filterIcon2 from "../assets/FilterAndSortIcon/Vector (6).png";
import { SortData } from "../data/SortData";
import axios from "axios";
import Products from "./Products";

const FilterAndSortSection = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [filtername, setfiltername] = useState("all");
  const [sortByValue, setSortByValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("filterName", filtername);
        const res = await axios.get(
          `hhttps://fog-backend-nr2a.onrender.com/data/furnitureFilter?value=${filtername}`
        );
        setCardDetails(res.data.filterFurnitures);
        console.log("card details", res);
        console.log("data", res.data.filterFurnitures);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filtername]);

  function filterChangeHandler(e) {
    const value = e.target.value;
    setfiltername(value);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        //console.log("filterName", filtername);
        const res = await axios.get(
          `https://fog-backend-nr2a.onrender.com/data/sortByValue?value=${sortByValue}`
        );
        setCardDetails(res.data.sortedFurnitures);
        console.log("sort", res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [sortByValue]);

  function sortByChangeHandler(e) {
    const value = e.target.value;
    setSortByValue(value);
  }
  return (
    <div>
      <div className="h-[5rem] bg-orange-100 -mt-1 flex justify-around justify-items-center pt-[1.5rem] px-[0.2rem]">
        <div className="flex gap-5 ">
          <div>
            <label for="filter">Filter</label>
            <select
              name="filter"
              id="filter"
              onChange={(e) => filterChangeHandler(e)}
            >
              {FilterData.map((option, index) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
          <div>
            <img src={filterIcon1} alt="" width={20} height={20} />
          </div>
          <div>
            <img src={filterIcon2} alt="" width={20} height={20} />
          </div>

          <div className="border-r-2 border-gray-500 h-5 "></div>
          <p>Showing 1-16 of 16 results</p>
        </div>

        <div className="flex gap-2">
          <div>
            <label for="page">Show</label>
            <select name="page" id="page">
              <option value="16">16</option>
            </select>
          </div>

          <div>
            <label for="sort">Sort by</label>
            <select
              name="sort"
              id="sort"
              onChange={(e) => sortByChangeHandler(e)}
            >
              {SortData.map((option, index) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Products cardDetails={cardDetails} />
    </div>
  );
};

export default FilterAndSortSection;
