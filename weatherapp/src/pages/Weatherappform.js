
<form id="forecast-container" className='formGrid1'>
{weatherData.list &&
    weatherData.list.map((item, index) => (
        // every 8th item in an array is one day.
        index % 8 === 0 && (
            <div key={index} className='formGrid forecastContainerFormat'>
                <h2>{weatherData.city && weatherData.city.name}</h2>
                <ol className='forecastContainerFormat'>
                    <li>{/* Format the date here */}
                        {format(new Date(item.dt_txt), "MMMM, EEEE, do, yyyy")}
                    </li>
                    <li>{item.main.temp}</li>
                    <li>{item.wind.speed}</li>
                    <li>{item.main.humidity}</li>
                    <li>{item.weather[0].description}</li>
                </ol>
            </div>
        )
    ))}
</form>