import React, {Component} from 'react';
import {movieDetails,  movieReviews} from './MovieService.js'; 

class MovieDetailsPage extends Component{

	constructor(props){
		super(props);
		this.state ={
			title:props.title,
			imdbID:props.imdbID,
			movieDetails:null,
			errorMessage: null,
			movieReviews: null,
			movieReviewsErrorMessage: null,
		}
		this.handleMovieDetailsResults = this.handleMovieDetailsResults.bind(this);
		this.handleMovieReviewsResults = this.handleMovieReviewsResults.bind(this);
		this.getMovieReviewResultsList = this.getMovieReviewResultsList.bind(this);
	}

	handleMovieDetailsResults(response){
		this.setState({errorMessage: response.errorMessage, movieDetails: response.movieDetails});
	}

	handleMovieReviewsResults(response){
		this.setState({movieReviewsErrorMessage: response.errorMessage, movieReviews: response.movieReviews});
	}

	componentDidMount(){
		movieDetails(this.state.title, this.state.imdbID, this.handleMovieDetailsResults);
		movieReviews(this.state.title, this.handleMovieReviewsResults);
	}


	getMovieReviewResultsList(movieReviews, movieReviewsErrorMessage, filterTitle){
		let results = [];
		var filteredMovieReviews = null;
		if(movieReviews )
				filteredMovieReviews = movieReviews.filter((i)=>{return (i.display_title===filterTitle)});
		if( movieReviewsErrorMessage &&  movieReviewsErrorMessage.length > 0)
			results.push(<div><h2>Movie reviews:</h2>{movieReviewsErrorMessage}</div>);
		else if(!filteredMovieReviews || filteredMovieReviews.length===0)
			results.push(<div><h2>Movie reviews:</h2>No reviews available</div>);
		else{
			results.push(<div><h2>Movie reviews:</h2></div>);
			for(var i = 0; i < filteredMovieReviews.length;i++){
					var review = filteredMovieReviews[i];
					results.push(<div><h2>{review.display_title}</h2><div>{review.summary_short}</div><br/><br/></div>);
				}
		}
		return results;
	}

	render(){
		const [title, imdbID, errorMessage,]=[this.state.title,this.state.imdbID, this.state.errorMessage];
		if(errorMessage)
			return <div><h2>Error while getting movie details:</h2>{errorMessage}</div>;
		else if(this.state.movieDetails){
			const [movieDetails,movieReviews, movieReviewsErrorMessage] = [this.state.movieDetails, this.state.movieReviews, this.state.movieReviewsErrorMessage];
			const [year, title, plot] = [movieDetails.Year, movieDetails.Title, movieDetails.Plot];
			let movieReviewResults = this.getMovieReviewResultsList(movieReviews, movieReviewsErrorMessage, title);
			return (
				<div>
					<h2>{title}({year}) </h2>
					<p>{plot}</p><br/>
					{movieReviewResults}
				</div>
				);
		}
		else
			return null;
	}


}

export default MovieDetailsPage;