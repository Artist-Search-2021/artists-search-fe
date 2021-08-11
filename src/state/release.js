import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchReleases } from '../services/releasesApi';

const useRelease = (page) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchReleases(page, id)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [page]);

  return [releases, loading];
};

export default useRelease;
