// src/components/SearchBar.jsx
import { useState } from 'react';
import '../styles.css'
export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) onSearch(input);
    };

    return (
       <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter city"
    className="p-2 border-2 border-blue-500 rounded-lg w-2/3 text-gray-800"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
  >
    Search
  </button>
</form>

    );
}
