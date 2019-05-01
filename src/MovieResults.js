import React from 'react';
import { Link } from "react-router-dom";

	function getMovieResultsList(props){
		let results = [];
		for(var i = 0; i < props.movies.length;i++){
				var movie = props.movies[i];
				var poster = '';
				if(movie.Poster === 'N/A')
					poster = 'Poster: N/A';
				else 
					poster = <img src={movie.Poster} alt={movie.title}/>
				results.push(<p>  <Link to={`/movieDetails/?title=${movie.Title}&imdbID=${movie.imdbID}`}>{movie.Title}</Link> <br/>{poster}</p>);
			}
			return results;
	}

	function MovieResults(props) {
		let results = [];
		if(props.errorMessage != null && props.errorMessage.length > 0 )
			results.push(<p>{props.errorMessage}</p>);
		else if(props.movies){
			results = getMovieResultsList(props);
		}
		return (<div><h2>Movie results:</h2>{results}</div>);
	}

export default MovieResults;	