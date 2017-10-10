import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = { term: '' }
	}
	
	render() {
		return (
			<form onSubmit={this.onClickedSearch.bind(this)} className="input-group top-margin">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search videos" 
					className="form-control" />
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Search</button>
				</span>	
			</form>
		);
	}
	
	onInputChange(term){
		this.setState({term})
	}

	onClickedSearch(e) {
		e.preventDefault();
		this.props.onSearchTermChange(this.state.term)
	}
}

export default SearchBar;