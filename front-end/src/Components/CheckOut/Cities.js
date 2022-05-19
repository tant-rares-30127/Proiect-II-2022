import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      places: [],
      selectedCity: "City",
      // selectedPlace: "Place",
    };
    this.changeCity = this.changeCity.bind(this);
    //this.changePlace = this.changePlace.bind(this);
  }

  componentDidMount() {
    //https://reactjs.org/docs/react-component.html#componentdidmount
    this.setState({
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
    });
  }
  changeCity(event) {
    this.setState({ selectedCity: event.target.value });
    this.setState({
      places: this.state.cities.find(
        (entry) => entry.name == event.target.value
      ).places,
    });
  }
  //changePlace(event) {
  //  this.setState({ selectedPlace: event.target.value });
  // }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="form-group">
              <label style={styles.lbl}>City</label>
              <select
                className="form-select"
                placeholder="City"
                value={this.state.selectedCity}
                onChange={this.changeCity}
              >
                <option>City</option>
                {this.state.cities.map((e, key) => {
                  return <option key={key}> {e.nume}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label style={styles.lbl}>Place</label>
              <select
                className="form-select"
                placeholder="Place"
                //value={this.state.selectedPlace}
                //onChange={this.changePlace}
              >
                <option>Place</option>
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

const styles = {
  lbl: {
    marginTop: 5,
    marginBotton: 5,
  },
};
export default Cities;
