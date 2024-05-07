import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Movie.PropTypes = {
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default Movie;
