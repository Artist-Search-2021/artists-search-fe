import React from 'react';
import useSearch from '../../state/search';

export default function Search({ onSearch }) {
  const [searchTerm, onChange] = useSearch();
  const onSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="input"
          type="text"
          placeholder="Search artist"
          value={searchTerm}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
