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
        <div className="container">
          <div className="row">
            <div>
              <label style={styles.lbl}>City</label>
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
              <label style={styles.lbl}>Place</label>
              <select
                className="dropdown_btn"
                placeholder="Place"
                value={this.state.selectedPlace}
                onChange={this.changePlace}
              >
                <option className="dropdown_content">Place </option>
                {this.state.places.map((e, key) => {
                  return (
                    <option className="dropdown_item" key={key}>
                      {" "}
                      {e}
                    </option>
                  );
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
