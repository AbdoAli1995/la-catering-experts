import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface DualSearchBarProps {
  onSearch: (query: string, location: string) => void;
  onFilterClick: (filter: string) => void;
  initialQuery?: string;
  initialLocation?: string;
}

export const DualSearchBar: React.FC<DualSearchBarProps> = ({
  onSearch,
  onFilterClick,
  initialQuery = '',
  initialLocation = '',
}) => {
  const [service, setService] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(service, location);
  };

  const quickPills = [
    { label: '💍 Weddings', tag: 'weddings' },
    { label: '💼 Corporate', tag: 'corporate' },
    { label: '🌮 Taco Bar', tag: 'tacos' },
    { label: '👨‍🍳 Private Chef', tag: 'private-chef' },
    { label: '🚚 Food Truck', tag: 'truck' },
    { label: '🧀 Charcuterie', tag: 'charcuterie' },
    { label: '🎬 Film & TV Sets', tag: 'film' },
  ];

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-2 rounded-xl sm:rounded-full shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto"
      >
        {/* Find Field */}
        <div className="flex-1 flex items-center px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
          <div className="w-full text-left">
            <label htmlFor="search-service" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Find
            </label>
            <input
              id="search-service"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="Wedding, Corporate, Taco Bar, Private Chef"
              className="w-full text-sm font-medium text-gray-900 focus:outline-hidden placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* Near Location Field */}
        <div className="flex-1 flex items-center px-4 py-2 w-full">
          <MapPin className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
          <div className="w-full text-left">
            <label htmlFor="search-location" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Near
            </label>
            <input
              id="search-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Beverly Hills, Pasadena, 90210, DTLA"
              className="w-full text-sm font-medium text-gray-900 focus:outline-hidden placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-7 py-3 rounded-xl md:rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm tracking-wide transition shadow-sm shrink-0 cursor-pointer flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          SEARCH
        </button>
      </form>

      {/* Quick Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {quickPills.map((pill) => (
          <button
            key={pill.tag}
            type="button"
            onClick={() => onFilterClick(pill.tag)}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 hover:bg-white text-gray-800 border border-gray-200/80 shadow-xs hover:border-amber-400 hover:text-amber-700 transition cursor-pointer"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
};
