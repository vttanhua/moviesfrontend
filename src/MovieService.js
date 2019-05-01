
var MOVIES_API_BASEURL = "http://localhost:8085/api/movies/";

export function searchMovies(searchTerm,handleMovieSearchResults){
	  console.log("Get data for searchTerm:"+searchTerm);
	  fetch(MOVIES_API_BASEURL+'search?searchTerm='+searchTerm)
	        .then(response => {
	          if(response.ok){
	            return response.json();
	          }else{
	              throw new Error("Something went wrong...");
	          }

	        })
	        .then(data => 
	           {
	           	console.log(data);
	           	if(data.Response === "False"){
	           		handleMovieSearchResults({errorMessage: String(data.Error), movies: null,totalResults: null});
	           	}
	           	else if(data.Response === "True"){
	           		handleMovieSearchResults({errorMessage: null, movies: data.Search, totalResults: data.totalResults});
	           	}
	           })
	        .catch(error => 
	        	{
	        		handleMovieSearchResults({errorMessage: String(error), movies: null,totalResults: null});
	        		console.error("Error while searching movies: "+error);	
	        	})
	        ;  
	}

	export function movieDetails(movieTitle,movieImdvID, handleMovieDetailsResults){
	  console.log("Get data for movieImdvID:"+movieImdvID);
	  fetch(MOVIES_API_BASEURL+'details?imdbID='+movieImdvID)
	        .then(response => {
	          if(response.ok){
	            return response.json();
	          }else{
	              throw new Error("Something went wrong...");
	          }

	        })
	        .then(data => 
	           {
	           	console.log(data);
	           	if(data.Response === "False"){
	           		handleMovieDetailsResults({errorMessage: String(data.Error), movieDetails: null});
	           	}
	           	else if(data.Response === "True"){
	           		handleMovieDetailsResults({errorMessage: null, movieDetails: data});
	           	}
	           })
	        .catch(error => 
	        	{
	        		handleMovieDetailsResults({errorMessage: String(error), movies: null});
	        		console.error("Error while getting movie details: "+error);	
	        	})
	        ;  
	}


	export function movieReviews(movieTitle, handleMovieReviewsResults){
	  console.log("Get reviews for movieTitle:"+movieTitle);
	  fetch(MOVIES_API_BASEURL+'reviews?searchTerm='+movieTitle)
	        .then(response => {
	          if(response.ok){
	            return response.json();
	          }else{
	              throw new Error("Something went wrong...");
	          }

	        })
	        .then(data => 
	           {
	           	console.log(data);
	           	if(data.Response === "False"){
	           		handleMovieReviewsResults({errorMessage: String(data.Error), movieReviews: null});
	           	}
	           	else if(data.status === "OK"){
	           		handleMovieReviewsResults({errorMessage: null, movieReviews: data.results});
	           	}
	           })
	        .catch(error => 
	        	{
	        		handleMovieReviewsResults({errorMessage: String(error), movieReviews: null});
	        		console.error("Error while getting movieReviews: "+error);	
	        	})
	        ;  
	}	
