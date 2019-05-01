import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieSearchPage from './MovieSearchPage.js';
import MovieDetailsPage from './MovieDetailsPage.js';

	function MovieDetails({ location }){
		let params = new URLSearchParams(location.search);
		const props  = { title:params.get("title"), imdbID: params.get("imdbID") };
		return  <div><MovieDetailsPage title={props.title} imdbID={props.imdbID}/></div>;

	}

	function AppRouter(){
	return (
	    <Router>
	      <div>
	        <nav>
	          <ul>
	            <li>
	              <Link to="/">To Search</Link>
	            </li>
	          </ul>
	        </nav>
	        <br/><br/><br/>
	        <Route path="/" exact component={MovieSearchPage} />
	        <Route path="/movieDetails/" component={MovieDetails} />
	      </div>
	    </Router>
	  );
	}


export default AppRouter;