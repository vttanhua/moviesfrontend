import React, {Component} from 'react';
import MovieSearch from './MovieSearch.js';
import MovieResults from './MovieResults.js';
import {searchMovies} from './MovieService.js';

class MovieSearchPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			errorMessage: "",
			movies: null,
			totalResults: null,
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleMovieSearchResults = this.handleMovieSearchResults.bind(this);
	}

	handleMovieSearchResults(response){
		this.setState({errorMessage: response.errorMessage, movies: response.movies, totalResults: response.totalResults});
	}

	handleSearch(searchTerm){
		searchMovies(searchTerm,this.handleMovieSearchResults);
	}

	render(){
	  return (
	    <div className="App">
	      <MovieSearch onSearch={this.handleSearch} /> <br/><br/><br/>
	       <MovieResults errorMessage={this.state.errorMessage} movies={this.state.movies} />
	    </div>
	  );
	}



}

  export default MovieSearchPage;