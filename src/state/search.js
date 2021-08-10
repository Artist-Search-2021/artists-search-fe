import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };
  return [searchTerm, handleChange];
};
export default useSearch;
