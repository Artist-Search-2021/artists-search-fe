import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchReleases } from '../services/releasesApi';


const useRelease = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchReleases(id)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, []);

    
  return [releases, loading];
};

export default useRelease;
