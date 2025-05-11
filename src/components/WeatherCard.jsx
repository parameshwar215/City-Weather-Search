// src/components/WeatherCard.jsx
import '../styles.css'
export default function WeatherCard({ weatherData }) {
    if (!weatherData) return null;
    console.log(weatherData)

      const { location, current, forecast } = weatherData;
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
  <h2>🌤️ Weather in {location.name}, {location.country}</h2>
  
  <div style={{ display: "flex", gap: "20px", alignItems: "stretch"}}>
    {/* Current Weather */}
    <div style={{ flex: 1, border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h3>🌡️ Current Weather</h3>
      <p><strong>Condition:</strong> {current.condition.text}</p>
      <p><strong>Temperature:</strong> {current.temp_c}°C (Feels like {current.feelslike_c}°C)</p>
      <p><strong>Wind:</strong> {current.wind_kph} km/h from {current.wind_dir}</p>
      <p><strong>Humidity:</strong> {current.humidity}%</p>
      <p><strong>UV Index:</strong> {current.uv}</p>
    </div>

    {/* Air Quality */}
    <div style={{ flex: 1, border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h3>🌫️ Air Quality</h3>
      <p><strong>PM2.5:</strong> {current.air_quality.pm2_5.toFixed(2)}</p>
      <p><strong>PM10:</strong> {current.air_quality.pm10.toFixed(2)}</p>
      <p><strong>O₃:</strong> {current.air_quality.o3.toFixed(2)}</p>
      <p><strong>NO₂:</strong> {current.air_quality.no2.toFixed(2)}</p>
      <p><strong>SO₂:</strong> {current.air_quality.so2.toFixed(2)}</p>
      <p><strong>CO:</strong> {current.air_quality.co.toFixed(2)}</p>
    </div>

    {/* 3-Day Forecast */}
    <div style={{ flex: 1, border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h3>📅 3-Day Forecast</h3>
      <ul>
        {forecast.forecastday.map((day) => (
          <li key={day.date} style={{ marginBottom: "8px" }}>
            <strong>{day.date}:</strong> {day.day.condition.text} <br />
            Max: {day.day.maxtemp_c}°C | Min: {day.day.mintemp_c}°C <br />
            🌧️ Rain: {day.day.daily_chance_of_rain}%
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );

}
