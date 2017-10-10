import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'; 
import { fetchPost, deletePost } from '../../actions/index';

class ShowPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeletePost() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/Bblog');
            });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
             <Link to="/Bblog">Back to blog</Link>
             <button onClick={this.onDeletePost.bind(this)} className="btn btn-danger pull-xs-right">Delete</button>
             <h3 className="top-margin">{post.title}</h3>
             <h6>{post.categories}</h6>
             <p className="top-margin">{post.content}</p>
             <Link to={`/Bblog/edit/${this.props.params.id}`} className="pull-xs-right">Edit</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);