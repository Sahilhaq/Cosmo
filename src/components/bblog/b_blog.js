import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class Bblog extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<Link to={`/Bblog/post/${post.id}`} key={post.id}>
					<li className="list-group-item">
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</li>
				</Link>
			);
		})
	}

	
	render() {
		return (
			<div>
				<Link to="/">Back to Menu</Link>
				<Link to="/Bblog/new" className="btn-add-new btn btn-primary">Add New</Link>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()} 
				</ul>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(Bblog);