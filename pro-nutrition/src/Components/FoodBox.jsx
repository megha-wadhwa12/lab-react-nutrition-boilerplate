import React, { useState } from "react";

const FoodBox = (props) => {
  // console.log("props: ", props);

  let { data, index } = props;
  let { cal, id, img, name } = data;
  // console.log("index: ", index);
  // console.log("data: ", data);

  //orrrrr
  // let {data: {cal,id,image,name},index} = props

  const [input, setInput] = useState(0); //setinput is a function given by usestate
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = () => {
    setQuantity(input);
  };

  return (
    <div className="foodbox-main" key={index}>
      {/* Left section */}
      <div className="foodbox-main-left-1">
        <img src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <h2>{cal}</h2>
        </div>
      </div>
      {/* Right Section */}
      <div className="foodbox-main-left-2">
        <input
          type="number"
          value={input}
          min={0}
          max={10}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={quantityHandler}>+</button>
      </div>
      <div className="foodbox-main-right">
        <h4>
          {name} X {quantity} = {cal * quantity} Calories
        </h4>
        <button onClick={(()=>{
            setQuantity(0)
            setInput(0)
        })}>RESET</button>
      </div>
    </div>
  );
};

export default FoodBox;
