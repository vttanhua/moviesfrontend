import React, {Component} from 'react';

class MovieSearch extends Component{

	constructor(props){
		super(props);
		this.state = {
			searchKeyword:"",
			onSearch: props.onSearch,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		console.log(event.target.value);
		this.setState({searchKeyword: event.target.value });
		this.state.onSearch(event.target.value);
	}

	render(){
		const { searchKeyword } = this.state;
		return (
			<div>Search movie by name:<input value={searchKeyword} onChange={this.handleChange}/>
			</div>
			);
	}

}

export default MovieSearch;