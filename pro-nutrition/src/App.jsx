// import React from 'react'
import { useState } from "react";
import "./App.css";
import FoodBox from "./Components/FoodBox";
import Search from "./Components/Search";
import FoodData from "./resources/FoodData";
function App() {

  const [search,setSearch] = useState("");

  const filteredArray = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <h1>PRO NUTRITION 🍈</h1>
      <Search setSearch={setSearch} />
      {/* <p>{search}</p> */}
      {filteredArray.length==0? <h1>No result Found</h1>: filteredArray.map((e, i) => {
        return <FoodBox data={e} index={i} />;
      })}
    </>
  );
}

export default App;
