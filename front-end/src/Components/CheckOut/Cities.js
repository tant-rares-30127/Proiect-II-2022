import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      places: [],
      selectedCity: "City",
      selectedPlace: "Place",
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="form-group">
              <label style={styles.lbl}>City</label>
              <select className="form-select" placeholder="City">
                <option>Bucuresti</option>
              </select>
            </div>
            <div className="form-group">
              <label style={styles.lbl}>Place</label>
              <select className="form-select" placeholder="Place">
                <option>Bucuresti</option>
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
