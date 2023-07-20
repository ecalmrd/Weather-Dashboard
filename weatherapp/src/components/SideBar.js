import React from "react";

function SideBar() {
const styles = {
    textAlign: 'left',
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
    };


    return (
        <div style={styles}>
            <h1>Weather App</h1>
            <h2>Search for a city</h2>
            <h2>Current Weather</h2>
            <h2>5 Day Forecast</h2>
        </div>
    );
}

export default SideBar;
