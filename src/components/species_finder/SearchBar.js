import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('attempt to query something', query);
    }

    renderInput(field) {
        return <input type="text" placeholder="Search Here" {...field.input} />
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;