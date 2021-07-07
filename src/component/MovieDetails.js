import React, { useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { Moviesearchdetails } from '../actions';
import FetchDetail from '../container/Fetchdetail';
import '../assets/movieDetail.css';

const MovieDetails = (props) => {
  const { location, detailOfMovie, getdetails } = props;
  useEffect(() => {
    FetchDetail(location.state.imdbID).then((res) => getdetails(res));
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-5 text-center">
        <div className="container ">
          <div className="row">
            <div className="col-6 col-lg-5  mx-auto">
              <img className="w-100" src={detailOfMovie.poster} alt={detailOfMovie.title} />
            </div>
          </div>

          <div>
            <span className="t-dark"> Title: </span>
            <span className="text-primary">{detailOfMovie.title}</span>
          </div>

          <div>
            <span className="t-dark"> Date released: </span>
            <span className="text-primary">{detailOfMovie.released}</span>
          </div>
          <div>
            <span className="t-dark"> Genre: </span>
            <span className="text-primary">
              {' '}
              {detailOfMovie.genre}
            </span>
          </div>
          <div>
            <span className="t-dark"> Country: </span>
            <span className="text-primary">{detailOfMovie.country}</span>
          </div>
          <div>
            <span className="t-dark"> Actor: </span>
            <span className="text-primary">{detailOfMovie.actor}</span>
          </div>
          <div>
            <span className="t-dark">Director: </span>
            <span className="text-primary">{detailOfMovie.director}</span>
          </div>
          <div>
            <span className="t-dark">Awards: </span>
            <span className="text-primary">{detailOfMovie.award}</span>
          </div>
          <div>
            <span className="t-dark">Writer: </span>
            <span className="text-primary">{detailOfMovie.writer}</span>
          </div>
          <div>
            <span className="t-dark">Year: </span>
            <span className="text-primary">{detailOfMovie.year}</span>
          </div>
          <div>
            <span className="t-dark">Production:  </span>
            <span className="text-primary">{detailOfMovie.production}</span>
          </div>
        </div>
        <div className="text-center mx-auto py-3  mb-5 mt-3 h3 bg-dark w-25 text-danger">
          <Link className="text-danger text-decoration-none" to="/">
            BACK TO HOME
          </Link>

        </div>
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  location: {},
  getdetails() {},
};
MovieDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    }),
  }),
  getdetails: PropTypes.func,
  detailOfMovie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    award: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateProps = (state) => ({
  detailOfMovie: state.moviedetail,
});
const mapDispatchToProps = (dispatch) => ({
  getdetails: (details) => dispatch(Moviesearchdetails(details)),
});

export default connect(mapStateProps, mapDispatchToProps)(MovieDetails);
