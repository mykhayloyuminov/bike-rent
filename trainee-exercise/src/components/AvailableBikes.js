import React from "react";

const AvailableBikes = props => {
  return (
    <div>
      <h2><span>&#128692;</span>Available bycycles ({props.allbikes && props.allbikes.length})</h2>
      {props.allbikes && props.allbikes.map(bike => (
        <div className="rent_field" key={bike._id}>
          <div className="item_text">{bike.name} / {bike.type} / {bike.price}</div>
          <button onClick={() => props.rentNewOne(bike._id)} style={{ color: 'white', backgroundColor: 'blue', padding: '10px 20px', float: 'right', borderRadius: '10px' }}>Rent</button>
          <button onClick={() => props.deleteBike(bike._id)} style={{ color: 'white', backgroundColor: 'red', padding: '10px 20px', float: 'right', borderRadius: '10px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AvailableBikes;