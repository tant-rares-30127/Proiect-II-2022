import React from "react";
import "./Styles/ClientType.css";
class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { name: "Bucuresti", places: ["domnesti", "jilava", "moara vlasiei"] },
        {
          name: "Suceava",
          places: [
            "horodnic de sus",
            "vicov",
            "burla",
            "arbore",
            "radauti",
            "milisauti",
          ],
        },
      ],
      places: [],
      selectedCity: "City",
      selectedPlace: "Place",
    };
    this.changeCity = this.changeCity.bind(this);
    this.changePlace = this.changePlace.bind(this);
  }

  changeCity(event) {
    this.state.selectedCity = event.target.value;
    //this.setState({ selectedCity: event.target.value });
    this.state.places = this.state.cities.find(
      (entry) => entry.name === event.target.value
    ).places;

    this.props.updateData({ city: event.target.value }, true);
    //setTimeout(() => console.log(this.state), 1000);
  }

  changePlace(event) {
    this.setState({ selectedPlace: event.target.value });
    this.props.updateData({ place: event.target.value }, true);
    //setTimeout(() => console.log(this.state), 1000);
  }
  //changePlace(event) {
  //  this.setState({ selectedPlace: event.target.value });
  // }

  render() {
    return (
      <>
        <div>
          <div className="row">
            <div>
              <label className="egal2">City</label>
              <select
                placeholder="City"
                value={this.state.selectedCity}
                onChange={this.changeCity}
              >
                <option>City</option>
                {this.state.cities.map((e, key) => {
                  return <option key={key}> {e.name}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label className="egal">Place</label>
              <select
                placeholder="Place"
                value={this.state.selectedPlace}
                onChange={this.changePlace}
              >
                <option>Place </option>
                {this.state.places.map((e, key) => {
                  return <option key={key}> {e}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cities;
