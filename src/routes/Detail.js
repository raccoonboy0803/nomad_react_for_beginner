import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const data = await response.json();
  }
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
};

export default Detail;
