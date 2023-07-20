import React from "react";

function NavBar() {
const styles = {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    padding: "10px",
    fontFamily: "Arial"
    };



  return (
    <div style={styles}>
        <h1>Weather App</h1>
    </div>
  );
}

export default NavBar;