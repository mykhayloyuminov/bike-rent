import React from "react";
import "../YourRent.css";

const YourRent = (props) => {

function calculatePrice() {
    let array  = props.allrents ? props.allrents : [];
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i].price;
    }

    return sum;
  }

  return (
    <div className="item_margins">
      <h2><span>&#129321;</span>Your rent (Total: ${calculatePrice()})</h2>
      {props.allrents && props.allrents.map(rent => (
        <div className="rent_field" key={rent._id}>
          <div className="item_text">{rent.name} / {rent.type} / {rent.price}</div>
          <button onClick={() => props.deleteRent(rent._id)} className='your_rent__button'>Cancel rent </button>
        </div>
      ))}
    </div>
  );

}

export default YourRent;