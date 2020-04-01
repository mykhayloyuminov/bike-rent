import React from "react";
import '../NewRent.css';

class NewRent extends React.Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.type = React.createRef();
    this.price = React.createRef();
    this.state = {};
  }

  methodFromApp = () => {
    this.props.postDataToDB(this.name.current.value, this.type.current.value, this.price.current.value);
    this.name.current.value = '';
    this.type.current.value = '';
    this.price.current.value = '';
  }

  render() {
    return (
      <div className="main__container">
        <h2><span>&#129297;</span>Create New Rent</h2>
        <form className="new_rent">
          <div className="inl">
            <label htmlFor="name">Bike Name</label>
            <input className="interaction_field name" ref={this.name} name="name" type="text" />
          </div>
          <div className="inl">
            <label htmlFor="type">Bike Type</label>
            <select className="interaction_field type" ref={this.type} name="type">
              <option>Sport</option>
              <option>Mountain</option>
              <option>City</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div className="inl">
            <label htmlFor="price">Bike Price</label>
            <input className="interaction_field price" ref={this.price} name="price" type="number" />
          </div>
          <button className="new_rent__btn inl" onClick={this.methodFromApp}>Submit rent</button>
        </form>
      </div>
    );
  }
}

export default NewRent;