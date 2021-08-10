import React from 'react';
import useSearch from '../../state/search';

export default function Search() {
  const [searchTerm, onChange] = useSearch();
  return (
    <div>
      <form>
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
