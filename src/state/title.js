import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchTitles } from '../services/titlesApi';

const useTitle = () => {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchTitles(id)
      .then(setTitles)
      .finally(setLoading(false));
  }, []);

  return [titles, loading];
};

export default useTitle;
