import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, createPost, deletePost} from '../../actions/index';
import { reduxForm } from 'redux-form';

class EditPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            categories: '',
            content: ''
        }
    }

    onInputChange(e) {
       let name = e.target.name;
       switch(name){
           case 'title':
            this.setState({ title: e.target.value });
           break;
           case 'categories':
            this.setState({ categories: e.target.value });
           break;
           case 'content':
            this.setState({ content: e.target.value });
       }
        
    }

    componentWillMount(props){
        this.props.fetchPost(this.props.params.id, props)
            .then(() => {
                this.setState({
                    title: this.props.post.title,
                    categories: this.props.post.categories,
                    content: this.props.post.content
                })
            })
    }

    onFormSubmit(props) {
        this.props.deletePost(this.props.params.id);
        this.props.createPost(props)
            .then(() => { this.context.router.push('/Bblog') })
    }

    render() {
        const { fields: { title, categories, content}, post, handleSubmit } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }
        

        return (
            <div>
             <Link to={`/Bblog/post/${this.props.params.id}`}>Back</Link>
             <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="top-margin">
                <div className="form-group">
                    <label>Title</label>
                    <input 
                     value={this.state.title}
                     onChange={this.onInputChange.bind(this)}
                     className="form-control" 
                     name="title" 
                     placeholder="Title"
                     {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input 
                     value={this.state.categories}
                     onChange={this.onInputChange.bind(this)}
                     className="form-control" 
                     name="categories" 
                     placeholder="Categories" 
                     {...categories} />
                </div>
                <div className="form-group">
                     <label>Content</label>
                     <textarea
                       value={this.state.content}
                       onChange={this.onInputChange.bind(this)}
                       className="form-control" 
                       name="content" 
                       placeholder="Content"
                       {...content} />     
                </div>
                <button className="btn btn-primary">Save</button>
                <Link to={`/Bblog/post/${this.props.params.id}`} className="btn btn-danger left-margin">Cancel</Link>
             </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post }
}

export default reduxForm({
    form: 'editdForm',
    fields: ['title', 'categories', 'content']
}, mapStateToProps, { fetchPost, deletePost, createPost })(EditPost);