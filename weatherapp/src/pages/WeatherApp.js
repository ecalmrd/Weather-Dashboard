import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // 
import './styles/WeatherApp.css';

export default function Weather() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [weatherIconCode, setWeatherIconCode] = useState('');
    const [forecastIcons, setForecastIcons] = useState([]);


    const APIkey = "a202f8f680d642694eea46e96ad50d30";
    const APIurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIkey}`;

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(APIurl);

            const data = await response.json();
            console.log(data); // Log the fetched data to the console
            setWeatherData(data);

            // Set the weather icon code for the current day
            if (data && data.list && data.list.length > 0) {
                setWeatherIconCode(data.list[0].weather[0].icon);
            } else {
                setWeatherIconCode('');
            }

            // Set the weather icon codes for the 5-day forecast
            const icons = data.list.map(item => item.weather[0].icon);
            setForecastIcons(icons);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // You can set an initial city value here if needed
        // setCity('YourDefaultCity');
        handleSearch();
    }, []);

    useEffect(() => {
        console.log(weatherData); // Log the fetched data to the console
    }, [weatherData]);

    useEffect(() => {
        console.log(forecastIcons); // Log the forecastIcons array to the console
      }, [forecastIcons]);

    return (
        <section className='section'>

            <form className='formAlignment' onSubmit={handleSearch}>
                    <input
                        className='searchBar'
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                    />
                    <button type="submit">Search</button>
            </form>

            <div className='foreCastHeader'>
                <h1 className='foreCastTitle'>CURRENT WEATHER</h1>
            </div>

            <div className="currentWeatherContainer">
                <div id="current-weather-container">
                    {weatherData && (
                        <div className='currentWeatherContainerMargin'>
                            <h2 className='currentWeatherTextFormat'>{weatherData.city && weatherData.city.name}</h2>
                            {/* Display the weather icon */}
                            {weatherIconCode && (
                                <img
                                    src={`https://openweathermap.org/img/w/${weatherIconCode}.png`}
                                    alt="Weather Icon"
                                />
                            )}

                    <ol className='currentForecastContainerFormat'>
                        <li>{weatherData.list && weatherData.list[0].weather[0].description}</li>
                        <li>{weatherData.list && weatherData.list[0].main.temp}</li>
                        <li>{weatherData.list && weatherData.list[0].wind.speed}</li>
                        <li>{weatherData.list && weatherData.list[0].main.humidity}</li>
                        
                    </ol>
                </div>
                )}
            </div>
        </div>

<div className='foreCastHeader'>
    <h1 className='foreCastTitle'>5 DAY FORECAST</h1>
</div>

                <div className='forecastOuterContainer'>
                    <form className='formGrid'>
                        {weatherData.list && weatherData.list.map((item, index) => (
                                // every 8th item in an array is one day.
                                index % 8 === 0 && (
                                    <div key={index} className='forecastCard'>
                                        <h2>{item.main.temp}</h2>
                                        
                                        {/* Display the weather icon for each day in the 5-day forecast */}
                                        {index % 8 === 0 && weatherData.list[index].weather &&  (
                                            <img 
                                                src={`https://openweathermap.org/img/w/${weatherData.list[index].weather[0].icon}.png`}
                                                alt='Weather Icon'
                                            />
                                        )}

                                        <ol className='forecastContainerFormat'>
                                            <li> {format(new Date(item.dt_txt), "MMMM, EEEE, do, yyyy")}</li>
                                            <li>{item.weather[0].description}</li>
                                            <li>{item.wind.speed}</li>
                                            <li>{item.main.humidity}</li>   
                                        </ol>

                                    </div>
                                )
                            ))}
                    </form>
                </div>
   

        </section>


    
    );
}

