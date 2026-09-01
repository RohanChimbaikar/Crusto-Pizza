import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    const orderId = query.startsWith('#') ? query.slice(1) : query;
    navigate(`/order/${orderId}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-cream px-4 py-2 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-muted sm:w-64 sm:focus:w-72"
        type="search"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
