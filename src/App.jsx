// src/App.jsx
import { useState } from 'react';
import { fetchWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      alert("City not found or API error.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-cyan-200 flex items-center justify-center p-6">
      <div className="bg-white/80 p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">City Weather Search</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard weatherData={weatherData} />
      </div>
    </div>

  );
}
