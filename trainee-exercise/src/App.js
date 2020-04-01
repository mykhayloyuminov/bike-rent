import React from "react";
import AvailableBikes from './components/AvailableBikes.js';
import NewRent from './components/NewRent.js';
import YourRent from './components/YourRent.js';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  postDataToDB = (name, type, price) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        type: type,
        price: price
      })
    };
    fetch('http://localhost:4000/bikes', requestOptions);
    this.getAllBikes();
  }

  getAllBikes = () => {
    fetch('http://localhost:4000/bikes')
      .then(response => response.json())
      .then(data => this.setState({ allbikes: data }));
  }

  deleteBikeFromState = (id) => {
    let copy = [...this.state.allbikes];
    copy = copy.filter(el => el._id !== id);
    this.setState({ allbikes: copy })
  }

  deleteRentedBikeFromState = (id) => {
    let copy = [...this.state.rents];
    copy = copy.filter(el => el._id !== id);
    this.setState({ rents: copy })
  }

  deleteBike = (id) => {
    fetch(`http://localhost:4000/bikes/${id}`, {
      method: 'DELETE'
    });
    this.deleteBikeFromState(id);
  }

  deleteRent = (id) => {
    fetch(`http://localhost:4000/bikes/${id}/rents`, {
      method: 'DELETE'
    });
    this.deleteRentedBikeFromState(id);
  }

  getAllRents = () => {
    fetch('http://localhost:4000/rents')
      .then(response => response.json())
      .then(data => this.setState({ rents: data }));
  }

  rentNewOne = (id) => {
    fetch(`http://localhost:4000/bikes/${id}/rents`, { method: "POST" })
      .then(response => response.json())
      .then(data => this.setState({ rentedBike: data }))
      this.getAllRents();
  }

  componentDidMount = () => {
     this.getAllRents();
     this.getAllBikes();
  }

  render() {
    return (
      <div className="container">
        <div className="container_wrapper">
          <h1>Awesome Bike Rental</h1>
          <NewRent postDataToDB={this.postDataToDB} />
          <YourRent
            allrents={this.state.rents}
            deleteRent={this.deleteRent} />
          <AvailableBikes
            allbikes={this.state.allbikes}
            rentNewOne={this.rentNewOne}
            deleteBike={this.deleteBike} />
        </div>
      </div>
    );
  }
}

export default App;