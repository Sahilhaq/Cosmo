import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';

class PostNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onFormSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/Bblog')
            })
    }

	render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        
		return (
			<div>
                <Link to="/Bblog">Back to Menu</Link>
                <h5 className="top-margin"> Create a new post </h5>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="top-margin">
                    <div className={`form-gorup ${ title.touched && title.invalid ? 'has-danger' : '' }`}>
                     <label>title</label>
                     <input className="form-control" placeholder="title" {...title} />
                     <div className="text-help">
                        {title.touched ? title.error : '' }
                     </div>
                    </div> 
                    <div className={`form-group ${ categories.touched && categories.invalid ? 'has-danger' : '' }`}>
                     <label>categories</label>
                     <input className="form-control" placeholder="categories" {...categories} />
                     <div className="text-help">{ categories.touched ? categories.error : '' }</div>
                   </div> 
                   <div className={`form-group ${ content.touched && content.invalid ? 'has-danger' : '' }`}>
                     <label>Content</label>
                     <textarea className="form-control" placeholder="contents" {...content} />
                     <div className="text-help">{ content.touched ? content.error : '' }</div>
                   </div>
                   <button className="btn btn-primary" type="submit">Submit</button>
                   <Link to="/Bblog" className="btn btn-danger left-margin">Cancel</Link>
                </form>
			</div>
		);
	}
}

function validate(value) {
    const error = {};

    if(!value.title) {
        error.title = 'Enter a title';
    }

    if(!value.categories) {
        error.categories = 'Enter some categories';
    }

    if(!value.content) {
        error.content = 'Enter some contents';
    }

    return error;
}

export default reduxForm({
    form: 'postNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostNew);